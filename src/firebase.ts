// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDKxPDKEEEDp-uoZ0mIK4WbqFRhSlyNC8",
  authDomain: "budget-tracker-c6143.firebaseapp.com",
  projectId: "budget-tracker-c6143",
  storageBucket: "budget-tracker-c6143.appspot.com", // ✅ FIXED
  messagingSenderId: "930305985440",
  appId: "1:930305985440:web:aa13b10601eedaad8832c5",
  measurementId: "G-FMT3X5PHVY",
};
console.log("dsfds",firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
