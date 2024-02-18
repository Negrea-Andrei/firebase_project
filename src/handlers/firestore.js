// Firestore.js
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase.config";

const Firestore = {
    writeDoc: async (input, collection_name) => {
        return new Promise(async (resolve, reject) => {
            const randomNumbers = Math.floor(Math.random() * 10000);
            try {
                const docRef = doc(db, collection_name, `${randomNumbers}`);
                await setDoc(docRef, { title: input.title, path: input.path, createdAt: serverTimestamp() });
                resolve('new polaroid uploaded');
            } catch (error) {
                console.error("Error writing document: ", error);
                reject(error);
            }
        });
    },
};

export default Firestore;
