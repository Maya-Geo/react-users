import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBi4tvGsKRYsUoBvMcRdXrFzZsHeHkUfrk",
    authDomain: "user-app-b9f0b.firebaseapp.com",
    projectId: "user-app-b9f0b",
    storageBucket: "user-app-b9f0b.appspot.com",
    messagingSenderId: "70514500665",
    appId: "1:70514500665:web:77229edf7d43cfe64799e8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  firebase.firestore()
  
  export default firebase