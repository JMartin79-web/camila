import Head from "next/head"
import mendoza from "../assets/fotos/hero_img2.jpg"
import magic from "../assets/fotos/magia.png"
import magicTitle from "../assets/fotos/maiga-title.png"
import Image from "next/image"
import Tour from "@/components/Tour"
import Carrousel from "@/components/Carrousel"
import { useEffect, useState } from "react"
import { getDataByOrder } from "@/services/getFromDb"
import useToggle from "@/hooks/useToggle"

export default function Home({ tours, tourCarrouselImages }) {
  const [activeDot, setActiveDot] = useState(0)
  const { boolValue: openNav, toggle } = useToggle(false)

  useEffect(() => {
    // Google Tag Manager script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NBLDKCL');
    `;
    document.head.appendChild(script);

    // Google Tag Manager noscript code
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NBLDKCL"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    `;
    document.body.appendChild(noscript);
  }, []);

  return (
    <>
      <Head>
        <title>Your friend in Mendoza</title>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBLDKCL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </Head>
      <main>
        {/* <!-- HEADER --> */}
        <div className={`contains-header ${openNav ? 'header-open' : ''}`} id="header">

          <div className="header1">
            <header className={`header`}>
              <div className="header-logo">
                {/* <!-- <a href="#">CAMILA</a> --> */}
              </div>
              <div className="header-links">
                <a href="#about">About</a>
                <a href="#tours">Tours</a>
                <a href="#contact">Contact</a>
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

          <div id="header2" className={`header2 ${openNav ? 'header2-active' : ''}`}>
            <div className="header2-links">
              <a href="#about">About</a>
              <a href="#tours">Tours</a>
              <a href="#contact">Contact</a>
              <br />
              {/* <!-- <p>261 696-4118</p> --> */}
              {/* <!-- <p>Barrio Furlotti Manzana O casa 14, Maipú, Mendoza</p> --> */}
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
            <h1>Your friend in<br />Mendoza</h1>
            <p className="hero-p">Let's explore together!</p>
            <button className="button">
              <a href='https://api.whatsapp.com/send/?phone=5492616964118&text&app_absent=0' target="_blank">LETS TALK</a>
            </button>
          </section>
        </div>

        {/* <!-- CARROUSEL SECTION --> */}
        <Carrousel
          images={tourCarrouselImages}
          activeDot={activeDot}
          setActiveDot={setActiveDot}
        />

        <div id="tour-info" className="bg-[#f7f6f5]">
          {tours?.map((tour, index) => (
            <Tour
              key={tour.id}
              title={tour.title}
              schedule={tour.schedule}
              content={tour.content}
              price={tour.price}
              moreInfo={tour?.moreInfo}
              images={tour.images}
              activeTour={activeDot === index}
            />)
          )}
        </div>

        {/* <!-- ABOUT SECTIO --> */}
        <div className="contains-about">
          <section className="about">

            {/* <!--  
            <div className="about-contains-img">
                <div className="about-rectangle" id="about">
                </div>
                <div className="about-img">
                    <img src="./assets/fotos/about/camila.png" alt="perfil camila">
                </div>

                <div className="about-img2">
                    <img src="./assets/fotos/about/rodrigo.png" alt="perfil rodrigo">
                </div>
            </div>
            --> */}

            <div className="about-contains-info leading-tight text-2xl">
              <h2 className="about-tittle-mobile">Hello! We are your Mendocinians friends.</h2>
              <h2 className="about-h text-2xl">Hello! We are your</h2>
              <h2 className="about-h-big">Mendocinians friends.</h2>
              <p className="about-p text-base leading-tight">
                We are a group made up of 3 partners and friends who are passionate about our province and for making all those who visit it take away beautiful memories.
                <br /><br />

                We can and we want to be more than your guides or drivers. We want to take care of you and adapt to your preferences and needs so your days in Mendoza are the happiest and most memorable.
                <br /><br />

                Team up with us and book a tour with recommendations that only locals know.
                <br />
                Even if you want us to put together a personalized tour for you, feel free to ask us and we will gladly help you.
              </p>
            </div>
          </section>
        </div>

        {/* <!-- PLUS --> */}
        <div className="contains-plus">
          <div className="plus">
            <div className="plus-title">
              <h2 className="text-2xl leading-tight"><div className="contains-plus-magia">
                <div className="plus-magia">
                  <Image width={25} src={magic} alt="" />
                </div>
              </div>Plus
                <br />
                services</h2>
            </div>
            <div className="plus-txt leading-tight">
              <p>Book one of my tours or have a free video call with me! You'll get free travel advice, more recommendations and even personalised plans. </p>
            </div>
          </div>
        </div>

        {/* <!-- CALL TO ACTION --> */}
        <div className="contains-call leading-tight">
          <section className="call">
            <Image className="call-img" src={magicTitle} alt="magic title" />
            <h2 id="contact" className="text-2xl">Let´s make it happen!</h2>
            <p>We'll make sure it's your best trip ever!</p>
            {/* <!-- <button className="button"><a href="mailto:yourfriendinmendoza@gmail.com">EMAIL ME</a></button> --> */}
            <button className="button"><a href='https://api.whatsapp.com/send/?phone=5492616964118&text&app_absent=0' target="_blank">CONTACT US</a></button>
          </section>
        </div>

        {/* <!-- FOOTER --> */}
        <div className="contains-footer">
          <footer className="footer">

            <div className="footer-div1 leading-tight">
              <br />
              <h2>Your friend in<br />Mendoza</h2>
              <br />
              <p className="footer-p">Thank you for visiting</p>
              {/* <!-- <p className="footer-p">261 696-4118 | Barrio Furlotti Manzana O casa 14, Maipú, Mendoza</p> --> */}
            </div>

            {/* <!--
                CODIGO ANTERIOR
                
                <div className="footer-separation"></div>
                
                <div className="footer-div2">
                    <h2>Your friend in<br/>Mendoza</h2>
                    <br/>
                </div>
                
             --> */}

            <div className="footer-separation"></div>

            <div className="footer-div3">
              <a href="http://qr.afip.gob.ar/?qr=Q49RqIpafI1e_gqBJT4NrA,," target="_F960AFIPInfo">
                <img src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg" />
              </a>
            </div>
          </footer>

        </div>

        {/* <!-- BOTON WHATSAPP --> ?text=${encodeURIComponent(defaultMessage)*/}
        <a href="https://api.whatsapp.com/send/?phone=5492616964118&text&app_absent=0" target="_blank" id="btn-wsp">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
            <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
          </svg>
        </a>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const tours = await getDataByOrder('tours', 'title', 'asc', true)
  const tourCarrouselImages = tours.map(({ images }) => images[0])
  return {
    props: {
      tours,
      tourCarrouselImages,
    }
  }
}