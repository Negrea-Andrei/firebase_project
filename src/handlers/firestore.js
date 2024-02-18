// Firestore.js
import { doc, serverTimestamp, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase.config";

const Firestore = {
    readDocs: (...args) => {
        const [collection_name] = args
        let docs = []
        const ref = collection(db, collection_name)
        return new Promise(async(resolve, reject) => {
            try {
                const snapshots = await getDocs(ref)
                snapshots.forEach(doc => {
                    const d = {...doc.data()}
                    docs.push(d)
                })
                resolve(docs)
            }  catch (e){
                reject(e)
                console.log(e)
            }
        })
    },
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
