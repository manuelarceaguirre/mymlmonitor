from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to the Model Drift Detection API"

@app.route('/upload', methods=['POST'])
def upload_data():
    data = request.files.get('file')
    if not data:
        return {"error": "No file uploaded"}, 400

    # Process CSV file here and check for model drift
    return {"status": "Data received", "message": "Model drift detection will be performed"}

from werkzeug.middleware.proxy_fix import ProxyFix

app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_host=1)

if __name__ == '__main__':
    app.run(debug=False)
