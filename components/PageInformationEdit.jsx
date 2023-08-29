import { useRef } from 'react'

export default function PageInformationEdit({ collection }) {
    const aboutTitle = useRef(null)
    const aboutUs = useRef(null)
    const whatsapp = useRef(null)

    const handleUpdate = (e) => {
        e.preventDefault()
        const promise = updateValues(collection, 'lang.id', {
            aboutTitle: aboutTitle.current.value,
            aboutUsInfo: aboutUs.current.value,
            whatsapp: whatsapp.current.value
        })
        toast.promise(promise, {
            loading: 'Applicando cambios',
            success: 'Actaulizacion Finalizada',
            error: 'Hubo un error intente mas tarde!',
        })
    }

    return (
        <form onSubmit={handleUpdate} className='flex flex-col gap-4 mt-8'>
            <textarea ref={aboutTitle}
                placeholder={`Titulo`}
                rows={2}>
            </textarea>

            <textarea ref={aboutUs}
                placeholder={`Sobre nosotros`}
                rows={6}>
            </textarea>

            <input ref={whatsapp}
                placeholder='whatsapp'
            />
        </form>
    )
}
