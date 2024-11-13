document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    await db.collection('users').doc(userCredential.user.uid).set({
      email: email,
      role: role, // Сохраняем роль пользователя
      createdAt: new Date()
    });
    window.location.href = 'profile.html';
  } catch (error) {
    alert('Ошибка регистрации: ' + error.message);
  }
});
