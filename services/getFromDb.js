import { getDoc, getDocs, doc, collection, query, where, DocumentData, orderBy, OrderByDirection } from "firebase/firestore"
import { db } from '../firebaseConfig'

export const getData = async (docCollection) => {
    const colRef = collection(db, docCollection)
    const snapShots = await getDocs(colRef)
    const response = snapShots.docs.map(doc => {
        const data = doc.data()
        data.id = doc.id
        return data
    })
    return response
}

export const getDataByPath = async (dbCollection, path) => {
    const docRef = doc(db, dbCollection, path)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No such document!")
    }
}

export const getDataByField = async (dbCollection, field, value, all) => {
    if (!value) return
    try {
        const q = query(collection(db, dbCollection), where(field, "==", value))
        const querySnapshot = await getDocs(q)
        if (all) return querySnapshot.docs.map(doc => doc.data())
        const data = querySnapshot.docs[0].data()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getDataByOrder = async (dbCollection, field, order, all) => {
    try {
        const q = query(collection(db, dbCollection), orderBy(field, order)) //"asc" or "desc"
        const querySnapshot = await getDocs(q)
        if (all) return querySnapshot.docs.map(doc => {
            const data = doc.data()
            data.id = doc.id
            return data
        })
        const data = querySnapshot.docs[0].data()
        return data
    } catch (error) {
        console.error(error)
    }
}