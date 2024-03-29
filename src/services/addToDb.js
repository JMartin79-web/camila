import { toast } from 'react-hot-toast'
import { db } from '../../firebaseConfig'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'

export const addToDataBase = async (collectionName, values) => {
    try {
        const myCollection = collection(db, collectionName)
        await addDoc(myCollection, values)
        toast('Creacion Finalizada', {
            style: { backgroundColor: 'rgb(34 197 94)', color: 'white' }
        })
    } catch (error) {
        toast('Hubo un error intente mas tarde!', {
            style: { backgroundColor: 'red', color: 'white' }
        })
    }
}

export const updateValues = async (collectionName, id, values) => {
    try {
        const myDoc = doc(db, collectionName, id)
        await updateDoc(myDoc, values)
        toast('Actaulizacion Finalizada', {
            style: { backgroundColor: 'rgb(34 197 94)', color: 'white' }
        })
    } catch (error) {
        toast('Hubo un error intente mas tarde!', {
            style: { backgroundColor: 'red', color: 'white' }
        })
    }
}