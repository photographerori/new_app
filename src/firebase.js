import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0RbEOx8h7oNQKrkDbVUHp2kTDpKHSAd4",
  authDomain: "vue-fire-ffb9d.firebaseapp.com",
  databaseURL: "https://vue-fire-ffb9d.firebaseio.com",
  projectId: "vue-fire-ffb9d",
  storageBucket: "vue-fire-ffb9d.appspot.com",
  messagingSenderId: "843917389865",
  appId: "1:843917389865:web:c0b7686aa79619ca3cec38",
  measurementId: "G-7EQVFXK2HE",
};

const app = firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export default app.firestore();
