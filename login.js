document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    window.location.href = 'profile.html';
  } catch (error) {
    alert('Ошибка входа: ' + error.message);
  }
});