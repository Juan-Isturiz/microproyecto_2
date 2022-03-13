// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPm5rl_TwxPs_ouScCzEnhMn-8INYLiQw",
  authDomain: "microproyecto-2-b6fd3.firebaseapp.com",
  projectId: "microproyecto-2-b6fd3",
  storageBucket: "microproyecto-2-b6fd3.appspot.com",
  messagingSenderId: "1002316757187",
  appId: "1:1002316757187:web:5ff9e7cb1dc8ea4851ca76",
  measurementId: "G-LGSXM3BEJV"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
export const db = fire.firestore()

