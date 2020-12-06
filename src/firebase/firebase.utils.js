import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQu3DLV6g4NiALmR6wQL6JVj9lmJpzXUM",
    authDomain: "crown-shopping-store.firebaseapp.com",
    projectId: "crown-shopping-store",
    storageBucket: "crown-shopping-store.appspot.com",
    messagingSenderId: "393834933377",
    appId: "1:393834933377:web:d4b3f61468304cab983180",
    measurementId: "G-BMSPQ7J56R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;