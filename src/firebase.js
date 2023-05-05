// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAii5ny8takjcpA5fmX0XL0ZmW8zicllJ0",
  authDomain: "doose-manager.firebaseapp.com",
  projectId: "doose-manager",
  storageBucket: "doose-manager.appspot.com",
  messagingSenderId: "130618575622",
  appId: "1:130618575622:web:83eba77db83bddcf872c87",
  measurementId: "G-YZLYB0HRT1"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);