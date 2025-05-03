
import { initializeApp ,getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANM6MeB6melobM5pLp8II8rsZjE8-FwnU",
  authDomain: "acetalk-bcdef.firebaseapp.com",
  projectId: "acetalk-bcdef",
  storageBucket: "acetalk-bcdef.firebasestorage.app",
  messagingSenderId: "486235984855",
  appId: "1:486235984855:web:0f7a0f8b7da38af0057192",
  measurementId: "G-RKHKQ5RQSE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();



export const auth = getAuth(app);
export const db =  getFirestore(app)

