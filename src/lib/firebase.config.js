// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxuy0WfUinHUMzu_3XUpUpaoQ7jY_lwfA",
  authDomain: "polaroid-feb2e.firebaseapp.com",
  projectId: "polaroid-feb2e",
  storageBucket: "polaroid-feb2e.appspot.com",
  messagingSenderId: "373470389575",
  appId: "1:373470389575:web:4549cccb125ef1819bd862",
  measurementId: "G-ZW80N5XQW9",
};

// Initialize Firebase
const app = () => {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error("Error");
  } else {
    console.log("Works");
  }
  return initializeApp(firebaseConfig);
};

export default app;
