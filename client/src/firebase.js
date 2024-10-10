// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personal-blog-24a3d.firebaseapp.com",
  projectId: "personal-blog-24a3d",
  storageBucket: "personal-blog-24a3d.appspot.com",
  messagingSenderId: "257140916562",
  appId: "1:257140916562:web:6cc63fda0d91d649e0fa8b"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);