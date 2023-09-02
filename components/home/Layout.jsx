import useToggle from '@/hooks/useToggle'
import mendoza from "../../assets/fotos/hero_img2.jpg"
import Image from 'next/image'

const navList = ['About', 'Tours', 'Contact']
const navListEs = ['about', 'tours', 'contact']
const navListPort = ['about', 'tours', 'contact']

const yourFriend = 'Your friend in'
const explore = `Let's explore together!`
const talk = 'LETS TALK'
const thankYou = 'Thank you for visiting'

export default function Layout({ children, whatsappNumber }) {
    const { boolValue: openNav, toggle } = useToggle(false)

    {/* <!-- HEADER --> */ }
    return (<>
        <div className={`contains-header ${openNav ? 'header-open' : ''}`} id="header">

            <div className="header1">
                <header className={`header`}>
                    <div className="header-logo">
                        {/* <!-- <a href="#">CAMILA</a> --> */}
                    </div>
                    <div className="header-links">
                        {navList.map(link => <a key={link} href={`#${link.toLocaleLowerCase()}`}>{link}</a>)}
                    </div>
                    <div className="header-menu">
                        <button onClick={toggle} className={`hamburger hamburger--squeeze ${openNav ? 'is-active' : ''}`} type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </header>
            </div>

            <div id="header2" className={`header2 leading-tight pb-4 ${openNav ? 'header2-active' : ''}`}>
                <div className="header2-links">
                    {navList.map(link => <a key={link + 'mobile'} href={`#${link.toLocaleLowerCase()}`}>{link}</a>)}
                </div>
            </div>
        </div>

        {/* <!-- HERO SECTION --> */}
        <div className="contains-hero">
            <div className="hero-img">
                <div className="hero-img-filter"></div>
                <Image src={mendoza} alt="mendoza" />
            </div>
            <section className="hero leading-tight">
                <h1>{yourFriend}<br />Mendoza</h1>
                <p className="hero-p">{explore}</p>
                <button className="button">
                    <a href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&app_absent=0`} target="_blank">{talk}</a>
                </button>
            </section>
        </div>

        <main>{children}</main>

        {/* <!-- FOOTER --> */}
        <div className="contains-footer">
            <footer className="footer">

                <div className="footer-div1 leading-tight">
                    <br />
                    <h2>{yourFriend}<br />Mendoza</h2>
                    <br />
                    <p className="footer-p">{thankYou}</p>
                    {/* <!-- <p className="footer-p">261 696-4118 | Barrio Furlotti Manzana O casa 14, Maipú, Mendoza</p> --> */}
                </div>

                <div className="footer-separation"></div>

                <div className="footer-div3">
                    <a href="http://qr.afip.gob.ar/?qr=Q49RqIpafI1e_gqBJT4NrA,," target="_F960AFIPInfo">
                        <img src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg" />
                    </a>
                </div>
            </footer>

        </div>

        {/* <!-- BOTON WHATSAPP --> ?text=${encodeURIComponent(defaultMessage)*/}
        <a href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&app_absent=0`} target="_blank" id="btn-wsp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
            </svg>
        </a>
    </>)
}