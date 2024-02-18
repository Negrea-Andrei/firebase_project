import { getFirestore, setDoc } from "firebase/firestore";
import app from "./lib/firebase.config";

const db = getFirestore(app);

const Firestore = {
  writeDocs: (...args) => {
    return new Promise((resolve) => {
      try {
      } catch(e) {}
    });
  },
};
