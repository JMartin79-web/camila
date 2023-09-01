import { toast } from 'react-hot-toast'
import { db } from '../firebaseConfig'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'

export const addToDataBase = async (collectionName, values) => {
    try {
        const myCollection = collection(db, collectionName)
        await addDoc(myCollection, values)
        toast('Creacion Finalizada')
    } catch (error) {
        toast.error('Hubo un error intente mas tarde!')
    }
}

export const updateValues = async (collectionName, id, values) => {
    try {
        const myDoc = doc(db, collectionName, id)
        await updateDoc(myDoc, values)
        toast('Actaulizacion Finalizada')
    } catch (error) {
        toast.error('Hubo un error intente mas tarde!')
    }
}