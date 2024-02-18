import { ref, uploadBytes } from "firebase/storage";
import {storage} from "../lib/firebase.config"

const Storage = {
    uploadFile: (medium) => {
        return new Promise(async resolve => {
            try {
                const fileRef= ref(storage, `images/${medium.title}`)
                uploadBytes(fileRef, medium.file).then(snapshot => {
                    resolve({path:snapshot.metadata.fullPath, name: medium.title})
                })
            }catch(e) {
                console.error(e)
            }
        })
    }
}

export default Storage