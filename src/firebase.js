import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

//Firebase config.
const config = {
  apiKey: "AIzaSyC4NNLTGJ3RvfzlJSPj7kiC-_bq9VPeK4U",
  authDomain: "react-firebase-blog-3964f.firebaseapp.com",
  databaseURL: "https://react-firebase-blog-3964f-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-firebase-blog-3964f",
  storageBucket: "react-firebase-blog-3964f.appspot.com",
  messagingSenderId: "624598012980",
  appId: "1:624598012980:web:71678b3f2b772b4c352661",
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
