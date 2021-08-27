import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-KP_B7Y8Hzgz__pY_7HFS79XyBmPYGxQ",
  authDomain: "clone-c9ebe.firebaseapp.com",
  projectId: "clone-c9ebe",
  storageBucket: "clone-c9ebe.appspot.com",
  messagingSenderId: "171701845136",
  appId: "1:171701845136:web:a9ebb494322f66ce09ac15",
  measurementId: "G-175SF18X6G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };