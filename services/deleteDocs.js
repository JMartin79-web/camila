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
        const promise = deleteDoc(document)
        toast.promise(promise, {
            loading: 'Eliminando',
            success: 'Actaulizacion Finalizada',
            error: 'Hubo un error intente mas tarde!',
        })
    } catch (error) {
        alert('Ocurrio un error, intente mas tarde!')
    }
}