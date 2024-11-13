// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZeeNENIxgP6B4UICT6oa6UHRlkEWehK8",
  authDomain: "qulaq-1b2b8.firebaseapp.com",
  projectId: "qulaq-1b2b8",
  storageBucket: "qulaq-1b2b8.firebasestorage.app",
  messagingSenderId: "97029004996",
  appId: "1:97029004996:web:f14d7e13990b5dc8637391",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Регистрация пользователя
document.addEventListener("DOMContentLoaded", function() {
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;

      try {
        const userCredential = await auth.createUserWithEmailAndPassword(auth, email, password);
        // Логика создания дневника для ученика/учителя
        alert('Пользователь зарегистрирован');
        window.location.href = "student_dashboard.html"; // или teacher_dashboard.html
      } catch (error) {
        alert(error.message);
      }
    });
  }

  // Вход пользователя
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      try {
        const userCredential = await auth.signInWithEmailAndPassword(auth, email, password);
        // Логика перехода на страницу пользователя в зависимости от роли
        window.location.href = "student_dashboard.html"; // или teacher_dashboard.html
      } catch (error) {
        alert(error.message);
      }
    });
  }
});
// Firebase config (уже должен быть подключен)
// Firestore instance
const db = firebase.firestore();

// Функция для отображения данных на странице учеников
async function loadStudentDashboard(userId) {
  const welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.innerText = `Добро пожаловать, ${userId}`;

  const gradesList = document.getElementById('grades-list');
  gradesList.innerHTML = '';

  try {
    const querySnapshot = await db.collection('grades').where('studentId', '==', userId).get();
    querySnapshot.forEach((doc) => {
      const gradeData = doc.data();
      const listItem = document.createElement('li');
      listItem.textContent = `${gradeData.subject}: ${gradeData.grade}`;
      gradesList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Ошибка при загрузке оценок:", error);
  }
}

// Функция для управления оценками учителя
async function loadTeacherDashboard() {
  const addGradeForm = document.getElementById('add-grade-form');
  const classGradesList = document.getElementById('class-grades-list');

  addGradeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const studentId = document.getElementById('student-id').value;
    const subject = document.getElementById('subject').value;
    const grade = parseInt(document.getElementById('grade').value, 10);

    try {
      await db.collection('grades').add({
        studentId,
        subject,
        grade,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert('Оценка добавлена');
      loadClassGrades();
    } catch (error) {
      console.error("Ошибка при добавлении оценки:", error);
    }
  });

  async function loadClassGrades() {
    classGradesList.innerHTML = '';

    try {
      const querySnapshot = await db.collection('grades').orderBy('createdAt', 'desc').get();
      querySnapshot.forEach((doc) => {
        const gradeData = doc.data();
        const listItem = document.createElement('li');
        listItem.textContent = `Ученик: ${gradeData.studentId}, ${gradeData.subject}: ${gradeData.grade}`;
        classGradesList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Ошибка при загрузке оценок:", error);
    }
  }

  loadClassGrades();
}

// Вызов функций в зависимости от страницы
document.addEventListener('DOMContentLoaded', () => {
  const user = firebase.auth().currentUser;

  if (document.body.contains(document.getElementById('grades-container')) && user) {
    loadStudentDashboard(user.uid);
  } else if (document.body.contains(document.getElementById('grades-management')) && user) {
    loadTeacherDashboard();
  }

  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      firebase.auth().signOut().then(() => {
        window.location.href = 'index.html';
      });
    });
  }
});
