import { updateValues } from '@/services/addToDb'
import { useRef } from 'react'
import { toast } from 'react-hot-toast'
import SubmitButton from './SubmitButton'

export default function PageInformationEdit({ collection, docId, aboutHeader, aboutText, whatsappNum }) {
    const aboutTitle = useRef(null)
    const aboutUs = useRef(null)
    const whatsapp = useRef(null)

    const handleUpdate = async (e) => {
        e.preventDefault()
        toast.loading('Aplicando Cambios', {
            position: 'top-center',
            duration: 2000,
        });
        await updateValues(collection, docId, {
            aboutTitle: aboutTitle.current.value.split('\n').join('<br/>'),
            aboutUsInfo: aboutUs.current.value.split('\n').join('<br/>'),
            whatsapp: whatsapp.current.value
        })
    }

    return (
        <form onSubmit={handleUpdate} className='flex flex-col gap-4 mt-8'>
            <textarea ref={aboutTitle}
                defaultValue={aboutHeader?.split('<br/>').join('\n')}
                placeholder={`Titulo`}
                rows={2} required>
            </textarea>

            <textarea ref={aboutUs}
                defaultValue={aboutText?.split('<br/>').join('\n')}
                placeholder={`Sobre nosotros`}
                rows={8} required>
            </textarea>

            <div className='flex gap-4 items-center'>
                <input ref={whatsapp}
                    className='grow'
                    defaultValue={whatsappNum}
                    placeholder='whatsapp'
                    required
                />
                <SubmitButton>Guardar Cambios</SubmitButton>
            </div>
        </form>
    )
}
