// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXfmZhSLgiz4Oj4jMWwCgzFt_Sldegpuc",
  authDomain: "skin-girl-lab.firebaseapp.com",
  projectId: "skin-girl-lab",
  storageBucket: "skin-girl-lab.firebasestorage.app",
  messagingSenderId: "640828362478",
  appId: "1:640828362478:web:e3c0cfa4f042ff0c866dff"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Bon export ESModules
export { db };
