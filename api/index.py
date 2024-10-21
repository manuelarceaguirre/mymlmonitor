from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_data():
    data = request.get_json()
    return {"status": "Data received", "message":"Model drift detection will be performed"}

if __name__ == "__main__":
    app.run(debug=True)