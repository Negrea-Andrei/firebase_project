import { getFirestore, setDoc } from "firebase/firestore";
import {db} from "./lib/firebase.config";

const Firestore = {
    writeDocs: (...args) => {
        const [inputs, collection_name] = args
        return new Promise((resolve) => {
            try {
                const randomNumbers = Math.floor(Math.random() * 10000 )
                const docRef = doc(db, 'stocks', `${randomNumbers}`);
                setDoc(docRef, { 
                    key: ''
                });

            } catch (e) { }
        });
    },
};
