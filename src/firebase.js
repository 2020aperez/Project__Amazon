import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjGej_Jto5r8Dqzyc1MBtL-cDsNZsAzMs",
  authDomain: "clone-3ab6d.firebaseapp.com",
  databaseURL: "https://clone-3ab6d.firebaseio.com",
  projectId: "clone-3ab6d",
  storageBucket: "clone-3ab6d.appspot.com",
  messagingSenderId: "584067839355",
  appId: "1:584067839355:web:b507c6d302d569733179de",
  measurementId: "G-CHM76SQ78P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
