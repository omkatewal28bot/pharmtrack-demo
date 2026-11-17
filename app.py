import os
from flask import Flask, request, jsonify, send_from_directory
from pymongo import MongoClient, ASCENDING
from pymongo.errors import PyMongoError
app = Flask(__name__)
client = MongoClient(os.environ.get('MONGO_URI','mongodb://localhost:27017'), serverSelectionTimeoutMS=2500)
db = client.pharmtrack_demo
@app.get('/')
def home(): return send_from_directory(app.root_path,'index.html')
@app.errorhandler(PyMongoError)
def database_error(e): return jsonify(error='MongoDB unavailable or write failed'),503
@app.get('/api/inventory')
def inventory():
    db.medicines.create_index('id', unique=True)
    return jsonify(initialized=bool(db.meta.find_one({'_id':'seeded'})),medicines=list(db.medicines.find({}, {'_id':0})))
@app.post('/api/seed')
def seed():
    data=request.get_json()
    if not db.meta.find_one({'_id':'usability_v2'}):
        fresh=not db.meta.find_one({'_id':'seeded'})
        for m in data['medicines']:
            if fresh or m['id'].startswith(('PT-EX-','PT-OLD-')):
                db.medicines.update_one({'id':m['id']},{'$setOnInsert':m},upsert=True)
        db.meta.update_one({'_id':'seeded'},{'$set':{'ready':True}},upsert=True)
        db.meta.update_one({'_id':'usability_v2'},{'$set':{'ready':True}},upsert=True)
    return jsonify(ok=True)
@app.post('/api/medicines')
def add():
    db.medicines.insert_one(request.get_json()); return jsonify(ok=True),201
@app.patch('/api/medicines/<id>')
def edit(id):
    data=request.get_json(); patch={k:data[k] for k in ('stock','price','expiry') if k in data}
    if not patch or any(not isinstance(patch[k],(int,float)) or patch[k]<0 for k in ('stock','price') if k in patch): return jsonify(error='Invalid values'),400
    result=db.medicines.update_one({'id':id},{'$set':patch}); return (jsonify(ok=True),200) if result.matched_count else (jsonify(error='Not found'),404)
@app.delete('/api/medicines/<id>')
def delete(id):
    db.medicines.delete_one({'id':id}); return jsonify(ok=True)
@app.get('/api/states')
def states(): return jsonify(list(db.medicines.aggregate([{'$group':{'_id':'$state','medicines':{'$sum':1},'quantity':{'$sum':'$stock'}}},{'$sort':{'_id':1}}])))
@app.get('/health')
def health(): return jsonify(ok=True)

if __name__=='__main__': app.run(host='127.0.0.1',port=int(os.environ.get('PORT',5000)))
