import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyBZeeNENIxgP6B4UICT6oa6UHRlkEWehK8",
        authDomain: "qulaq-1b2b8.firebaseapp.com",
        projectId: "qulaq-1b2b8",
        storageBucket: "qulaq-1b2b8.firebasestorage.app",
        messagingSenderId: "97029004996",
        appId: "1:97029004996:web:f14d7e13990b5dc8637391",
        measurementId: "G-40Q62CTBX8"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

