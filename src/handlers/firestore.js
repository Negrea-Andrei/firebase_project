// Importing necessary functions from Firebase Firestore module
import { doc, serverTimestamp, setDoc, collection, getDocs } from "firebase/firestore";

// Importing the Firestore instance from the Firebase configuration
import { db } from "../lib/firebase.config";

// Object containing Firestore methods
const Firestore = {
    // Method to read documents from a Firestore collection
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
                // Resolving with the array of documents
                resolve(docs)
            }  catch (e){
                // Rejecting with the error in case of failure
                reject(e)
                console.log(e)
            }
        })
    },
    // Method to write a document to a Firestore collection
    writeDoc: async (input, collection_name) => {
        return new Promise(async (resolve, reject) => {
          const randomNumbers = Math.floor(Math.random() * 10000);
          try {
            // Creating a document reference with a random number as the document ID
            const docRef = doc(db, collection_name, `${randomNumbers}`);
            
            // Setting the document with the provided data
            await setDoc(docRef, { title: input.title, path: input.path, createdAt: serverTimestamp(), user: input.user });
            
            // Resolving with a success message
            resolve('new polaroid uploaded');
            
            // Refresh the window after successful upload
            window.location.reload(); // or location.reload();
          } catch (error) {
            // Logging and rejecting in case of error
            console.error("Error writing document: ", error);
            reject(error);
          }
        });
      },
};

// Exporting the Firestore object
export default Firestore;
