// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Load environment variables from .env file
const apiKey = process.env.API_KEY;
const authDomain = "polaroid-feb2e.firebaseapp.com";
const projectId = "polaroid-feb2e";
const storageBucket = "polaroid-feb2e.appspot.com";
const messagingSenderId = process.env.MESSAGE_ID;
const appId = process.env.ID;
const measurementId = "G-ZW80N5XQW9";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
