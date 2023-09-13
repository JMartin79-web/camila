import { useRef, useState } from 'react'
import { previewFile, mediaUpload } from '../services/uploadToStorage'
import { addToDataBase } from '../services/addToDb'
import { toast } from 'react-hot-toast'
import UploadInput from './UploadInput'

export default function NewTour({ collection, refetch }) {
    const formRef = useRef(null)
    const content = useRef(null)
    const title = useRef(null)
    const price = useRef(null)
    const time = useRef(null)
    const moreInfo = useRef(null)
    const [images, setImages] = useState([])
    const [previewImgs, setPreviewImgs] = useState([])

    const handleImgAdd = (e) => {
        const files = e?.target?.files
        if (files) {
            let fileArr = []
            for (let i = 0; i < files.length; i++) {
                fileArr.push(files[i])
            }
            setImages(prev => [...prev, ...fileArr])
            previewFile([...fileArr], setPreviewImgs)
        }
    }
    const deleteImg = (name) => {
        const nonDeletedPreviews = previewImgs.filter(file => file.name !== name)
        const nonImgDeleted = images.filter(file => file.name !== name)
        setImages(nonImgDeleted)
        setPreviewImgs(nonDeletedPreviews)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!images.length) return toast('Deberia subir minimo una Imagen!')

        toast.loading('Cargando...', {
            position: 'top-center',
            duration: 2000,
        });

        let imgUrls = []
        for (let i = 0; i < images.length; i++) {
            const url = await mediaUpload(images[i], 'tour-images')
            imgUrls.push(url)
        }

        await addToDataBase(collection, {
            content: content?.current?.value.split('\n').join('<br/>'),
            title: title?.current?.value,
            price: price?.current?.value.split('\n')?.join('<br/>'),
            schedule: time?.current?.value,
            moreInfo: moreInfo?.current?.value?.split('\n')?.join('<br/>'),
            images: imgUrls
        })
        setTimeout(() => {
            setImages([])
            setPreviewImgs([])
            formRef?.current?.reset()
        }, 1500)

        refetch()
    }

    return (
        <form className='flex flex-col gap-4 my-4' ref={formRef} onSubmit={handleSubmit}>
            <h2 className='text-lg font-semibold text-left'>Nuevo Tour:</h2>
            <input ref={title}
                className=''
                placeholder='Tour'
                required
            />
            <input ref={time}
                className=''
                placeholder='Horario'
                required
            />
            <textarea ref={content}
                placeholder={`Informacion de Tour`}
                rows={8}
                required>
            </textarea>
            <textarea ref={price}
                placeholder='Precio'
                rows={2} required>
            </textarea>
            <textarea ref={moreInfo}
                placeholder={`Mas Informacion (optional)`}
                rows={6}>
            </textarea>
            <div>
                {previewImgs?.map(({ name, img }) => (
                    <div key={name} className='relative w-fit'>
                        <img className='my-2 rounded max-w-[500px]' src={img} alt='' />
                        <button type='button'
                            onClick={() => deleteImg(name)}
                            className='bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 my-2 absolute top-2 right-3'
                        >
                            &times;
                        </button>
                    </div>
                ))}

                <UploadInput handleImgAdd={handleImgAdd} />

                <center>
                    <button type='submit' className='bg-green-500 hover:bg-green-300 my-4 text-white px-4 py-2 rounded'>
                        Guardar Tour
                    </button>
                </center>
            </div>
        </form>
    )
}