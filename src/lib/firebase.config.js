// Importing the necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Load environment variables from .env file
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase with the provided configuration
const app = initializeApp(firebaseConfig);

// Get Firestore instance from the initialized Firebase app
export const db = getFirestore(app);

// Get Storage instance from the initialized Firebase app
export const storage = getStorage(app);

// Get Auth instance from the initialized Firebase app
export const auth = getAuth(app);

// Export the initialized Firebase app
export default app;
