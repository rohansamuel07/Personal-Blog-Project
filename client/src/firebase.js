// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9c16b.firebaseapp.com",
  projectId: "mern-blog-9c16b",
  storageBucket: "mern-blog-9c16b.appspot.com",
  messagingSenderId: "81671334028",
  appId: "1:81671334028:web:fc9c648e00e476012773a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
