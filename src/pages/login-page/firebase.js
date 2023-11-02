// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh2Z5DQgs1f4pm2zcMpA7wTuGyu7ggW5Y",
  authDomain: "intern-quiz-generator.firebaseapp.com",
  projectId: "intern-quiz-generator",
  storageBucket: "intern-quiz-generator.appspot.com",
  messagingSenderId: "971235764955",
  appId: "1:971235764955:web:41e4dcd28ba8a773313afe",
  measurementId: "G-N222R2FEBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);