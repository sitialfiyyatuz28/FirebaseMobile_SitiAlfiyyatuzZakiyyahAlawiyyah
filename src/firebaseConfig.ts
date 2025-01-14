import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3Kz07wnEfBM98lqaFF2q43EXJGjHzDPw",
    authDomain: "todoapp-9fde9.firebaseapp.com",
    projectId: "todoapp-9fde9",
    storageBucket: "todoapp-9fde9.firebasestorage.app",
    messagingSenderId: "510640707841",
    appId: "1:510640707841:web:3c69ad1620978ba41fe300"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
