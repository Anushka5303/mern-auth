// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7e8be.firebaseapp.com",
  projectId: "mern-auth-7e8be",
  storageBucket: "mern-auth-7e8be.appspot.com",
  messagingSenderId: "593438066072",
  appId: "1:593438066072:web:bbf180e995a232e21ed7ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);