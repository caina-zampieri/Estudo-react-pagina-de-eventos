import { initializeApp } from "firebase/app";
import firebase from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBRLunG-9jPUilarHl0zxhznO8yqu3-Xso",
    authDomain: "eventos-b0dbf.firebaseapp.com",
    projectId: "eventos-b0dbf",
    storageBucket: "eventos-b0dbf.appspot.com",
    messagingSenderId: "966013073172",
    appId: "1:966013073172:web:d739dd450cd828fc23b401"
  };
  
  // Initialize Firebase
export default initializeApp(firebaseConfig);