// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4dlIaAAtmRAcz4LbMn7dQdMkGHDjM_hw",
  authDomain: "glamour-attire.firebaseapp.com",
  projectId: "glamour-attire",
  storageBucket: "glamour-attire.appspot.com",
  messagingSenderId: "195436533034",
  appId: "1:195436533034:web:2f46c32fa769b7fe443a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;