import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaYnRIHT55NX0oeR60yOifnavKyMcjG50",
    authDomain: "huddle-6ee30.firebaseapp.com",
    projectId: "huddle-6ee30",
    storageBucket: "huddle-6ee30.appspot.com",
    messagingSenderId: "477132200547",
    appId: "1:477132200547:web:89d229e9564d41cce73656",
    measurementId: "G-H6D3HX3GY5"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider}
