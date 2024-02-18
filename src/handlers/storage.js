import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase.config";

const Storage = {
    uploadFile: (medium) => {
        return new Promise(async (resolve, reject) => {
            debugger
            try {
                const fileRef = ref(storage, `images/${medium.title}`);
                uploadBytes(fileRef, medium.file).then((snapshot) => {
                    resolve({ path: snapshot.metadata.fullPath, name: medium.title });
                });
            } catch (e) {
                console.error(e);
                reject(e);
            }
        });
    },

    downloadFile: (medium) => {
        return new Promise(async (resolve, reject) => {
            debugger
            try {
                const fileRef = ref(storage, medium.path);
                const downloadURL = await getDownloadURL(fileRef);
                resolve(downloadURL);
            } catch (e) {
                console.error(e);
                reject(e);
            }
        });
    },
};

export default Storage;
