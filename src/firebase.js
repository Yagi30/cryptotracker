// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//createUserWithEmailAndPassword imported from firebase

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6mKKhR00DaIAmYQdqZ67dValUp1pMi5U",
  authDomain: "login-auth-645b5.firebaseapp.com",
  projectId: "login-auth-645b5",
  storageBucket: "login-auth-645b5.appspot.com",
  messagingSenderId: "609506536014",
  appId: "1:609506536014:web:1133892884c5ce5a1f311f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//exporting function so that we can use it from other components
