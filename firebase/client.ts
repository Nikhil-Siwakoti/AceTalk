// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);