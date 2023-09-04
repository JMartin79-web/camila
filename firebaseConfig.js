import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA5bU6q88ObffAxVCr2TJAZf3SZptjwQRQ",
    authDomain: "yourfriendinmendoza-a49d2.firebaseapp.com",
    projectId: "yourfriendinmendoza-a49d2",
    storageBucket: "yourfriendinmendoza-a49d2.appspot.com",
    messagingSenderId: "959015182413",
    appId: "1:959015182413:web:231c1c0812c05e5e21bc04"
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app)