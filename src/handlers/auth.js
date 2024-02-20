import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase.config";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const PolaroidsAuth = {
    signIn: () => {
        return new Promise(resolve => {
            signInWithPopup(auth, provider)
                .then(response => {
                    resolve(response.user);
                })
                .catch(console.error);
        });
    },
    signOut: () => {
        return new Promise(resolve => {
            signOut(auth)
                .then(() => {
                    console.log("user logged out")
                    resolve()
                })
                .catch(console.error)
        })

    },
    getCurrentUser: () => {
        return new Promise(resolve => {
            return auth.onAuthStateChanged(resolve)
        })
    }
};

export default PolaroidsAuth;