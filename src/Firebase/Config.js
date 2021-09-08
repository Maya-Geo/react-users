import Firebase from Firebase;
import { initializeApp } from "firebase/app";

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
  
  export default Firebase