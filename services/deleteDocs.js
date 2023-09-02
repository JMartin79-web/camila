import { doc, deleteDoc } from "firebase/firestore"
import { db, storage } from "../firebaseConfig"
import { deleteObject, ref } from "firebase/storage"
import { toast } from "react-hot-toast"

export const deleteFromStorage = async (path) => {
    try {
        const storageRef = ref(storage, path)
        await deleteObject(storageRef)
    } catch (error) {
        console.log('there was an error with your request')
    }
}

export const deleteDocFromDb = async (dbCollection, id, images) => {
    const deleteConfirmation = confirm('Estas seguro de elminiar?')
    if (!deleteConfirmation) return
    try {
        if (images) {
            for (let index = 0; index < images.length; index++) {
                await deleteFromStorage(images[index])
            }
        }
        const document = doc(db, dbCollection, id)
        await deleteDoc(document)
        toast('Actaulizacion Finalizada', {
            style: { backgroundColor: 'rgb(34 197 94)', color: 'white' }
        })
    } catch (error) {
        toast('Ocurrio un error, intente mas tarde!', {
            style: { backgroundColor: 'red', color: 'white' }
        })
    }
}