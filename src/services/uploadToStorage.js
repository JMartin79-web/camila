import { storage } from '../../firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const mediaUpload = async (file, folder) => {
    try {
        const imgRef = ref(storage, `${folder}/${file.name}` + Date.now())
        const resp = await uploadBytes(imgRef, file)
        const pathReference = await getDownloadURL(ref(storage, resp.metadata.fullPath))
        return pathReference
    } catch (error) {
        alert(error)
    }
}

export const previewFile = (files, setPreview) => {
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.readAsDataURL(files[i])
        reader.onloadend = () => {
            setPreview(prev => {
                return [...prev, { name: files[i].name, img: reader.result }]
            })
        }
    }
}