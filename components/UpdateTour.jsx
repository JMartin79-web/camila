import useToggle from '@/hooks/useToggle'
import { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { updateValues } from '@/services/addToDb'
import { mediaUpload, previewFile } from '@/services/uploadToStorage'
import { deleteDocFromDb, deleteFromStorage } from '@/services/deleteDocs'
import UploadInput from './UploadInput'

export default function Tour({ title, images, schedule, content, price, moreInfo, id, collection }) {
    const { boolValue, toggle } = useToggle(false)
    const contentRef = useRef(null)
    const titleRef = useRef(null)
    const priceRef = useRef(null)
    const scheduleRef = useRef(null)
    const moreInfoRef = useRef(null)
    const [imagesUrl, setImagesUrl] = useState(images)
    const [imagesArr, setImages] = useState([])
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

    const deleteImg = (name, url) => {
        if (!confirm('Estas Seguro de Eliminar esta Imagen?')) return
        if (name) {
            const nonDeletedPreviews = previewImgs.filter(file => file.name !== name)
            const nonImgDeleted = imagesArr.filter(file => file.name !== name)
            setImages(nonImgDeleted)
            setPreviewImgs(nonDeletedPreviews)
        } else {
            const leftOverUrls = imagesUrl.filter(src => src !== url)
            setImagesUrl(leftOverUrls)
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if (!imagesUrl.length && !imagesArr.length) return toast.error('Deberia tener minimo una Imagen!')
        let imgUrls = []
        if (imagesArr.length) {
            for (let i = 0; i < imagesArr.length; i++) {
                const url = await mediaUpload(imagesArr[i], 'tour-images')
                imgUrls.push(url)
            }
        }
        for (let i = 0; i < images.length; i++) {
            if (!imagesUrl.includes(images[i])) {
                await deleteFromStorage(images[i])
            }
        }
        const promise = updateValues(collection, id, {
            title: titleRef?.current?.value,
            schedule: scheduleRef?.current?.value,
            content: content?.current?.value.split('\n').join('<br/>'),
            price: priceRef?.current?.value.split('\n')?.join('<br/>'),
            moreInfo: moreInfo?.current?.value?.split('\n')?.join('<br/>'),
            images: [...imagesUrl, ...imgUrls]
        })
        toast.promise(promise, {
            loading: 'Applicando cambios',
            success: 'Actaulizacion Finalizada',
            error: 'Hubo un error intente mas tarde!',
        })
    }

    return (
        <form onSubmit={handleUpdate}>
            <span className='flex gap-4 my-4'>
                <input placeholder='Titulo' className='grow' defaultValue={title} ref={titleRef} required />
                <button type='button'
                    className='bg-red-600 text-white px-3 pb-1 text-2xl rounded hover:opacity-50'
                    onClick={() => deleteDocFromDb(collection, id, images)}
                >
                    &times;
                </button>
                <button type='button'
                    className='flex items-center bg-white text-black px-4 pt-2 border-slate-300 w-fit border-2 rounded hover:opacity-50'
                    onClick={toggle}>{!boolValue ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    }
                </button>
                <button className='bg-green-500 text-white px-4 py-2 w-fit rounded hover:opacity-50' type='submit'>
                    <p className='hidden sm:block text-white'>Guardar Cambios</p>
                    <span className='sm:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z" />
                            <path d="M17 3V12H7V3" />
                            <path d="M7 21V16H17V21" />
                        </svg>
                    </span>
                </button>
            </span>
            {boolValue && (
                <div className='flex flex-col gap-4'>
                    <input ref={scheduleRef} className='' placeholder='Horario' defaultValue={schedule} required />

                    <textarea ref={contentRef}
                        defaultValue={content.split('<br/>').join('\n')}
                        placeholder='Informacion de Tour'
                        rows={8} required>
                    </textarea>

                    <textarea ref={priceRef}
                        placeholder='Precio'
                        defaultValue={price.split('<br/>').join('\n')}
                        rows={2} required>
                    </textarea>

                    <textarea ref={moreInfoRef}
                        placeholder='Mas Informacion (optional)'
                        defaultValue={moreInfo ? moreInfo?.split('<br/>')?.join('\n') : ''}
                        rows={6}>
                    </textarea>

                    {imagesUrl?.map(src => (
                        <div key={src} className='relative w-fit'>
                            <button type='button'
                                className='bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 absolute top-2 right-3'
                                onClick={() => deleteImg(undefined, src)}
                            >
                                Eliminar
                            </button>
                            <img className='max-w-[500px] rounded' src={src} alt='' />
                        </div>
                    ))}

                    {previewImgs?.map(({ name, img }) => (
                        <div key={name} className='relative w-fit'>
                            <img className='max-w-[500px] rounded' src={img} alt='' />
                            <button type='button'
                                onClick={() => deleteImg(name)}
                                className='bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 absolute top-2 right-3'>
                                Eliminar
                            </button>
                        </div>
                    ))}

                    <UploadInput handleImgAdd={handleImgAdd} />

                    <hr />
                </div>
            )}
        </form>
    )
}