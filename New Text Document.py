# Основной серверный код (Flask) для предсказания зон риска паводков
from flask import Flask, request, jsonify
import joblib
import pandas as pd
import numpy as np
import json
from flask_cors import CORS

# Инициализация Flask приложения
app = Flask(__name__)
CORS(app)  # Для обеспечения доступа к API из браузера

# Загрузка модели предсказания
model = joblib.load("flood_risk_model.pkl")

# API для получения предсказаний
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        features = np.array([[
            data['temperature'],
            data['rainfall'],
            data['river_level']
        ]])
        prediction = model.predict(features)[0]
        return jsonify({'flood_risk': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})

# API для предоставления зон риска (GeoJSON)
@app.route('/zones', methods=['GET'])
def get_zones():
    try:
        # Здесь необходимо заменить на актуальные данные
        with open('zones.json', 'r', encoding='utf-8') as file:
            zones = json.load(file)
        return jsonify(zones)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
