from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

@app.route('/')
def home():
    return jsonify({"message": "Flask backend is running!"})

# API endpoint to generate the tournament schedule
@app.route('/generate_schedule', methods=['POST'])
def generate_schedule():
    data = request.json
    # Placeholder logic for tournament scheduling
    return jsonify({"schedule": "Tournament schedule will be generated here!"})

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Run on port 5001
