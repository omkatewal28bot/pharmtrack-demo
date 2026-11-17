import os, secrets, re, math
from functools import wraps
from flask import Flask, request, jsonify, send_from_directory, session
from pymongo import MongoClient
from pymongo.errors import PyMongoError, DuplicateKeyError
from werkzeug.security import generate_password_hash, check_password_hash
app = Flask(__name__)
app.secret_key = os.environ['SECRET_KEY']
app.config.update(SESSION_COOKIE_HTTPONLY=True, SESSION_COOKIE_SECURE=True, SESSION_COOKIE_SAMESITE='Lax', MAX_CONTENT_LENGTH=4*1024*1024)
client = MongoClient(os.environ['MONGO_URI'], serverSelectionTimeoutMS=10000, connect=False)
db = client.pharmtrack_demo

def current():
    return db.users.find_one({'_id':session.get('email'), 'approved':True}) if session.get('email') else None

def public(u):
    return dict(email=u['_id'], name=u['name'], role=u['role'], approved=u['approved'])

def allow(*roles):
    def decorate(fn):
        @wraps(fn)
        def wrapped(*a, **kw):
            u=current()
            if not u: return jsonify(error='Please sign in'),401
            if u['role'] not in roles: return jsonify(error='Access denied'),403
            return fn(*a, **kw)
        return wrapped
    return decorate

@app.before_request
def protect():
    if request.method in ('POST','PATCH','DELETE') and not request.is_json:
        return jsonify(error='JSON required'),415

@app.get('/')
def home(): return send_from_directory(app.root_path,'index.html')
@app.errorhandler(PyMongoError)
def database_error(e): return jsonify(error='Database unavailable or write failed'),503
@app.errorhandler(DuplicateKeyError)
def duplicate(e): return jsonify(error='Record already exists'),409
@app.post('/api/login')
def login():
    d=request.get_json(); email=str(d.get('email','')).strip().lower(); password=str(d.get('password',''))
    ae=os.environ.get('ADMIN_EMAIL','').strip().lower(); ap=os.environ.get('ADMIN_PASSWORD','')
    if ae and email==ae and len(ap)>=12 and secrets.compare_digest(password.encode(),ap.encode()):
        db.users.update_one({'_id':ae},{'$set':{'name':'Administrator','role':'admin','approved':True,'password_hash':generate_password_hash(ap)}},upsert=True)
    u=db.users.find_one({'_id':email})
    if not u or not check_password_hash(u['password_hash'],password): return jsonify(error='Invalid email or password'),401
    if not u['approved']: return jsonify(error='Waiting for admin approval'),403
    session.clear(); session['email']=email
    return jsonify(public(u))
@app.post('/api/register')
def register():
    d=request.get_json(); email=str(d.get('email','')).strip().lower(); name=str(d.get('name','')).strip(); password=str(d.get('password','')); role=d.get('role')
    if not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',email) or len(email)>254 or not 1<=len(name)<=100 or not 12<=len(password)<=128 or role not in ('viewer','shopkeeper'): return jsonify(error='Enter valid details and a password of 12–128 characters'),400
    if email==os.environ.get('ADMIN_EMAIL','').strip().lower(): return jsonify(error='Reserved email'),400
    db.users.insert_one({'_id':email,'name':name,'password_hash':generate_password_hash(password),'role':role,'approved':role=='viewer'})
    return jsonify(ok=True,approved=role=='viewer'),201
@app.get('/api/me')
@allow('admin','shopkeeper','viewer')
def me(): return jsonify(public(current()))
@app.post('/api/logout')
def logout(): session.clear(); return jsonify(ok=True)
@app.get('/api/users')
@allow('admin')
def users(): return jsonify([public(u) for u in db.users.find()])
@app.patch('/api/users/<email>')
@allow('admin')
def approve(email):
    approved=request.get_json().get('approved')
    if type(approved) is not bool: return jsonify(error='Invalid approval'),400
    r=db.users.update_one({'_id':email,'role':'shopkeeper'},{'$set':{'approved':approved}})
    return (jsonify(ok=True),200) if r.matched_count else (jsonify(error='Not found'),404)
@app.get('/api/inventory')
@allow('admin','shopkeeper','viewer')
def inventory():
    db.medicines.create_index('id', unique=True)
    return jsonify(initialized=bool(db.meta.find_one({'_id':'seeded'})),medicines=list(db.medicines.find({}, {'_id':0})))
@app.post('/api/medicines')
@allow('admin','shopkeeper')
def add():
    d=request.get_json(); fields=('id','name','strength','form','cat','mfr','batch','stock','reorder','daily','expiry','dte','price','sell','waste','score','level','status','expired','action','state')
    if not isinstance(d,dict) or not all(k in d for k in fields): return jsonify(error='Missing fields'),400
    if any(type(d[k]) not in (int,float) or not math.isfinite(d[k]) or d[k]<0 for k in ('stock','price')): return jsonify(error='Invalid values'),400
    db.medicines.insert_one({k:d[k] for k in fields}); return jsonify(ok=True),201
@app.patch('/api/medicines/<id>')
@allow('admin','shopkeeper')
def edit(id):
    data=request.get_json(); patch={k:data[k] for k in ('stock','price','expiry') if k in data}
    if not patch or any(type(patch[k]) not in (int,float) or not math.isfinite(patch[k]) or patch[k]<0 for k in ('stock','price') if k in patch): return jsonify(error='Invalid values'),400
    result=db.medicines.update_one({'id':id},{'$set':patch}); return (jsonify(ok=True),200) if result.matched_count else (jsonify(error='Not found'),404)
@app.delete('/api/medicines/<id>')
@allow('admin')
def delete(id): db.medicines.delete_one({'id':id}); return jsonify(ok=True)
@app.get('/api/states')
@allow('admin','shopkeeper','viewer')
def states(): return jsonify(list(db.medicines.aggregate([{'$group':{'_id':'$state','medicines':{'$sum':1},'quantity':{'$sum':'$stock'}}},{'$sort':{'_id':1}}])))
@app.get('/health')
def health(): return jsonify(ok=True)
if __name__=='__main__': app.run(port=int(os.environ.get('PORT',5000)))
