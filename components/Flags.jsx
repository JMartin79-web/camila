import spanish from '../assets/es.svg'
import english from '../assets/en.svg'
import portugues from '../assets/port.svg'
import Image from "next/image"
import { useRouter } from 'next/router'

const size = 25

export default function Flags({ style, handleLangauge = console.log }) {
    const { pathname, push } = useRouter()

    const handleFlagPress = (lang) => {
        if (pathname === '/') handleLangauge(lang)
        else push('/admin/dashboard-' + lang)
    }

    return (
        <div className={style}>
            <button className='hover:opacity-50' onClick={() => handleFlagPress('en')}>
                <Image src={english} alt="english" width={size} height={size} />
            </button>
            <button className='hover:opacity-50' onClick={() => handleFlagPress('es')}>
                <Image src={spanish} alt="español" width={size} height={size} />
            </button>
            <button className='hover:opacity-50' onClick={() => handleFlagPress('port')}>
                <Image src={portugues} alt="portugues" width={size} height={size} />
            </button>
        </div>
    )
}