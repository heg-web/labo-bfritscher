// plugins/firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// import "firebase/compat/storage";
// import "firebase/compat/firestore";

// Initialize Firebase
// Copy from google firebase console (Authentication>Web Setup)
const config = {
    apiKey: "AIzaSyDZt98CIUYUBPeW32wvtA5hWOFlSLp03C0",
    authDomain: "ptw.firebaseapp.com",
    databaseURL: "https://ptw.firebaseio.com",
    projectId: "firebase-ptw",
    storageBucket: "firebase-ptw.appspot.com",
    messagingSenderId: "281865054216",
    appId: "1:281865054216:web:e2d79f491c1cc7d1"
};
export default firebase.initializeApp(config);
