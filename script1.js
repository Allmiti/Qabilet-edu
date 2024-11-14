document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;

    // Определяем, на какую страницу перенаправить в зависимости от роли
    if (role === 'student') {
        window.location.href = 'student-dashboard.html';
    } else if (role === 'teacher') {
        window.location.href = 'teacher-dashboard.html';
    }
});
