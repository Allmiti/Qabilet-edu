var map = L.map('map').setView([51.505, -0.09], 13); // Пример: координаты для Лондона

// Настройка OpenStreetMap в качестве слоя
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Добавление геозоны (круга) с радиусом 500 метров
var circle = L.circle([51.505, -0.09], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);