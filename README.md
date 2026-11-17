# PharmTrack Demo
College demonstration with synthetic inventory records. No authentication: public users can modify the database. Do not connect real pharmacy data.

## Render deployment
1. Extract ZIP and upload the contents of PharmTrack_Deploy to a new GitHub repository (files at repository root).
2. Create a MongoDB Atlas database user and configure network access for Render. Copy the connection string; never commit it to GitHub.
3. In Render create a Web Service using the repository, Python runtime, main branch, empty Root Directory.
4. Build command: `pip install -r requirements.txt`
5. Start command: `gunicorn --bind 0.0.0.0:$PORT app:app`
6. Set environment variable `MONGO_URI` to your Atlas connection string. Deploy. Alternatively use the included render.yaml as a Blueprint.
7. Open the Render URL. Check the dashboard says MongoDB connected. The browser seeds the demo database on first successful connection. If it says Local demo, check the connection string and Atlas network settings.
8. Verify add/edit/delete and persistence on refresh. /health checks the web process, not database connectivity.

## Local Windows run
In PowerShell inside the folder:
```
python -m pip install -r requirements.txt
$env:MONGO_URI="YOUR_ATLAS_CONNECTION_STRING"
python app.py
```
Open http://127.0.0.1:5000. For frontend-only demonstration open index.html; it uses local browser storage when MongoDB is unavailable.
