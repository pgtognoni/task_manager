// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const APIKEY = import.meta.env.REACT_APP_APIKEY;
const MESSAGINGID = import.meta.env.REACT_APP_MESSAGINGID;
const APPID = import.meta.env.REACT_APP_APPID;
const MEASUREMENTID = import.meta.env.REACT_APP_MEASUREMENTID;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "doose-manager.firebaseapp.com",
  projectId: "doose-manager",
  storageBucket: "doose-manager.appspot.com",
  messagingSenderId: MESSAGINGID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

// Initialize Firebase
initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = firebase.firestore();