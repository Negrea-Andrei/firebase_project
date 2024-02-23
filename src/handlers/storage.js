// Importing necessary functions from Firebase Storage module
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Importing the Storage instance from the Firebase configuration
import { storage } from "../lib/firebase.config";

// Object containing Storage methods
const Storage = {
    // Method to upload a file to Firebase Storage
    uploadFile: (medium) => {
        return new Promise(async (resolve, reject) => {
            debugger
            try {
                // Creating a reference to the file in Firebase Storage
                const fileRef = ref(storage, `images/${medium.title}`);
                // Uploading bytes of the file to Firebase Storage
                uploadBytes(fileRef, medium.file).then((snapshot) => {
                    // Resolving with the metadata information
                    resolve({ path: snapshot.metadata.fullPath, name: medium.title });
                });
            } catch (e) {
                // Logging and rejecting in case of error
                console.error(e);
                reject(e);
            }
        });
    },

    // Method to download a file from Firebase Storage
    downloadFile: (medium) => {
        return new Promise(async (resolve, reject) => {
            debugger
            try {
                // Creating a reference to the file in Firebase Storage
                const fileRef = ref(storage, medium.path);
                // Getting the download URL of the file
                const downloadURL = await getDownloadURL(fileRef);
                // Resolving with the download URL
                resolve(downloadURL);
            } catch (e) {
                // Logging and rejecting in case of error
                console.error(e);
                reject(e);
            }
        });
    },
};

// Exporting the Storage object
export default Storage;
