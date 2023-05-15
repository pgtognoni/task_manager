import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const APIKEY = process.env.REACT_APP_APIKEY;
const MESSAGINGID = process.env.REACT_APP_MESSAGINGID;
const APPID = process.env.REACT_APP_APPID;
const MEASUREMENTID = process.env.REACT_APP_MEASUREMENTID;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "doose-manager.firebaseapp.com",
  databaseURL: "https://doose-manager-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "doose-manager",
  storageBucket: "doose-manager.appspot.com",
  messagingSenderId: MESSAGINGID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);