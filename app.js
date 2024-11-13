// Регистрация ученика
document.getElementById('studentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid;
            return db.collection('students').doc(userId).set({
                email: email,
                grades: []
            });
        })
        .then(() => {
            alert('Регистрация успешна! Перейдите в школьный дневник.');
            window.location.href = 'diary.html';
        })
        .catch((error) => {
            console.error("Ошибка: ", error.message);
            alert(error.message);
        });
});

// Регистрация учителя
document.getElementById('teacherForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('teacherEmail').value;
    const password = document.getElementById('teacherPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid;
            return db.collection('teachers').doc(userId).set({
                email: email,
                classes: []
            });
        })
        .then(() => {
            alert('Регистрация успешна! Вы можете управлять оценками.');
            window.location.href = 'teacher_dashboard.html';
        })
        .catch((error) => {
            console.error("Ошибка: ", error.message);
            alert(error.message);
        });
});
