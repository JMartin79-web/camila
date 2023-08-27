import { db } from '../firebaseConfig'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'

export const addToDataBase = async (collectionName, values) => {
    try {
        const myCollection = collection(db, collectionName)
        await addDoc(myCollection, values)
    } catch (error) {
        alert(error)
    }
}

export const updateValues = async (collectionName, id, values) => {
    try {
        const myDoc = doc(db, collectionName, id)
        await updateDoc(myDoc, values)
    } catch (error) {
        console.log(error)
    }
}