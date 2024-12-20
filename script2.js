// Firebase конфигурация
const firebaseConfig = {
    apiKey: "AIzaSyBZeeNENIxgP6B4UICT6oa6UHRlkEWehK8",
    authDomain: "qulaq-1b2b8.firebaseapp.com",
	databaseURL: "https://qulaq-1b2b8-default-rtdb.europe-west1.firebasedatabase.app"
    projectId: "qulaq-1b2b8",
    storageBucket: "qulaq-1b2b8.firebasestorage.app",
    messagingSenderId: "97029004996",
    appId: "1:97029004996:web:f14d7e13990b5dc8637391",
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Сохранение профиля ученика
document.getElementById('studentProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentProfile = {
        name: document.getElementById('name').value,
        class: document.getElementById('class').value,
        email: document.getElementById('email').value
    };

    db.ref('profiles/students/' + studentProfile.email.replace('.', '_')).set(studentProfile)
        .then(() => alert('Профиль ученика сохранен!'))
        .catch(error => console.error("Ошибка при сохранении профиля: ", error));
});

// Сохранение профиля учителя
document.getElementById('teacherProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const teacherProfile = {
        name: document.getElementById('name').value,
        subject: document.getElementById('subject').value,
        email: document.getElementById('email').value
    };

    db.ref('profiles/teachers/' + teacherProfile.email.replace('.', '_')).set(teacherProfile)
        .then(() => alert('Профиль учителя сохранен!'))
        .catch(error => console.error("Ошибка при сохранении профиля: ", error));
});
    const button = document.getElementById('navigate-btn');
    const clickSound = document.getElementById('click-sound');

    button.addEventListener('click', () => {
        // Проигрывание звука
        clickSound.play();

        // Задержка перед переходом, чтобы звук успел проиграться
        setTimeout(() => {
            window.location.href = 'https://example.com'; // URL целевой страницы
        }, 500); // Установите задержку в зависимости от длины звука (в миллисекундах)
    });

