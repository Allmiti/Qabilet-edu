// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBZeeNENIxgP6B4UICT6oa6UHRlkEWehK8",
  authDomain: "qulaq-1b2b8.firebaseapp.com",
  projectId: "qulaq-1b2b8",
  storageBucket: "qulaq-1b2b8.firebasestorage.app",
  messagingSenderId: "97029004996",
  appId: "1:97029004996:web:f14d7e13990b5dc8637391",
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();