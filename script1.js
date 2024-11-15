document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;

    // Определяем, на какую страницу перенаправить в зависимости от роли
    if (role === 'student') {
        window.location.href = 'student.html';
    } else if (role === 'teacher') {
        window.location.href = 'teacher.html';
    }
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
