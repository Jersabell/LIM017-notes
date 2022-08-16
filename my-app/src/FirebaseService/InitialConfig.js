// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD07nvinf3yhMpFKMYc8izFwmQHnzRrFXw",
  authDomain: "lab-notes-017.firebaseapp.com",
  projectId: "lab-notes-017",
  storageBucket: "lab-notes-017.appspot.com",
  messagingSenderId: "965846529406",
  appId: "1:965846529406:web:81fb0788b3ad2a2d6cef2f",
  measurementId: "G-EEM73XL0MM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);