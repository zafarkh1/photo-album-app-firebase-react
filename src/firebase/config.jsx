import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_KEY,
  authDomain: "photo-album-app-d1bc8.firebaseapp.com",
  projectId: "photo-album-app-d1bc8",
  storageBucket: "photo-album-app-d1bc8.appspot.com",
  messagingSenderId: "212607694486",
  appId: "1:212607694486:web:1d04632faaf221165e34b7",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, storage, timestamp };