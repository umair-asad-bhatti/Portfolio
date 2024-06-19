// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbQiEuWR3w3LnJNAsgcw4QnPiteIiWNZw",
    authDomain: "crowndb-f8363.firebaseapp.com",
    projectId: "crowndb-f8363",
    storageBucket: "crowndb-f8363.appspot.com",
    messagingSenderId: "586394573718",
    appId: "1:586394573718:web:6f29e55a07ee0593ba1bb7",
    measurementId: "G-7ZSDSNJFL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { app, db }