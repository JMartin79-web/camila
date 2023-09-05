import { useRouter } from 'next/router'

const size = 25
const english = 'https://firebasestorage.googleapis.com/v0/b/yourfriendinmendoza-a49d2.appspot.com/o/en.svg?alt=media&token=7f690af4-3bdc-44e1-adb8-64b706788162'
const spanish = 'https://firebasestorage.googleapis.com/v0/b/yourfriendinmendoza-a49d2.appspot.com/o/es.svg?alt=media&token=189dca77-5f05-485c-97d8-11ba2469e98b'
const portugues = 'https://firebasestorage.googleapis.com/v0/b/yourfriendinmendoza-a49d2.appspot.com/o/port.svg?alt=media&token=32210b5a-c76f-46cb-8c29-f0de63d5803a'

export default function Flags({ style, handleLangauge = console.log }) {
    const { pathname, push } = useRouter()

    const handleFlagPress = (lang) => {
        if (pathname === '/') handleLangauge(lang)
        else push('/admin/dashboard-' + lang)
    }

    return (
        <div className={style}>
            <button className='hover:opacity-50' onClick={() => handleFlagPress('en')}>
                <img src={english} alt="english" width={size} height={size} />
            </button>
            <button className='hover:opacity-50' onClick={() => handleFlagPress('es')}>
                <img src={spanish} alt="español" width={size} height={size} />
            </button>
            <button className='hover:opacity-50' onClick={() => handleFlagPress('port')}>
                <img src={portugues} alt="portugues" width={size} height={size} />
            </button>
        </div>
    )
}