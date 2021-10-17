// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZgtUqcQP4imATyb9owA4jtqg9fIrrHa4",
  authDomain: "instagram-clone-30650.firebaseapp.com",
  projectId: "instagram-clone-30650",
  storageBucket: "instagram-clone-30650.appspot.com",
  messagingSenderId: "397852457148",
  appId: "1:397852457148:web:36d3554ac2ee3b4b4778b9",
  measurementId: "G-T8QM0T4V0E",
};

// Initialize Firebase if none is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
