// Importing necessary functions from Firebase authentication module
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

// Importing the auth instance from the Firebase configuration
import { auth } from "../lib/firebase.config";

// Creating a GoogleAuthProvider instance with custom parameters
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Object containing authentication methods
const PolaroidsAuth = {
    // Method to sign in using Google authentication popup
    signIn: () => {
        return new Promise(resolve => {
            signInWithPopup(auth, provider)
                .then(response => {
                    // Resolving with the user information upon successful sign-in
                    resolve(response.user);
                })
                .catch(console.error);
        });
    },
    // Method to sign out the user
    signOut: () => {
        return new Promise(resolve => {
            signOut(auth)
                .then(() => {
                    // Logging a message upon successful sign-out
                    console.log("user logged out");
                    resolve();
                })
                .catch(console.error);
        });
    },
    // Method to get the current user by listening to authentication state changes
    getCurrentUser: () => {
        return new Promise(resolve => {
            // Listening to auth state changes and resolving with the current user
            return auth.onAuthStateChanged(resolve);
        });
    }
};

// Exporting the PolaroidsAuth object
export default PolaroidsAuth;
