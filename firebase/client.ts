// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcSPKGXqk54SdtzqDKodG1gHoWTKLcdkQ",
  authDomain: "interviewpal-7964c.firebaseapp.com",
  projectId: "interviewpal-7964c",
  storageBucket: "interviewpal-7964c.firebasestorage.app",
  messagingSenderId: "1025823635124",
  appId: "1:1025823635124:web:ccd3a254f196d6c34d49e1",
  measurementId: "G-7HS6WN9ZLQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);