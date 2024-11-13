auth.onAuthStateChanged(async (user) => {
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  // Получаем данные пользователя из базы данных
  const userDoc = await db.collection('users').doc(user.uid).get();
  const userData = userDoc.data();

  // Выводим приветственное сообщение с указанием роли
  const role = userData.role;
  document.body.insertAdjacentHTML('afterbegin', `<h2>Добро пожаловать, ${role === 'teacher' ? 'Учитель' : 'Ученик'}</h2>`);

  const journalList = document.getElementById('journal-list');
  const journalForm = document.getElementById('journal-form');

  // Загружаем дневник в зависимости от роли
  const snapshot = await db.collection('journals').where('userId', '==', user.uid).where('role', '==', role).get();
  snapshot.forEach(doc => {
    const li = document.createElement('li');
    li.textContent = doc.data().entry;
    journalList.appendChild(li);
  });

  // Добавление записи в дневник
  journalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const entry = document.getElementById('journal-entry').value;
    await db.collection('journals').add({
      userId: user.uid,
      entry: entry,
      role: role, // Сохраняем роль в записи
      createdAt: new Date()
    });
    window.location.reload();
  });

  // Выход из системы
  document.getElementById('logout').addEventListener('click', () => {
    auth.signOut().then(() => {
      window.location.href = 'login.html';
    });
  });
});
