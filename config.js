import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyB1lBrG5jXqONn34gfTO5NxOWyYKC5TQH8",
  authDomain: "barter-system-61d77.firebaseapp.com",
  projectId: "barter-system-61d77",
  storageBucket: "barter-system-61d77.appspot.com",
  messagingSenderId: "496655533630",
  appId: "1:496655533630:web:5ce1b056140003a3dc736f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
