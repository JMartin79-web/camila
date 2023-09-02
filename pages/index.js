import Head from "next/head"
import magic from "../assets/fotos/magia.png"
import magicTitle from "../assets/fotos/maiga-title.png"
import Image from "next/image"
import Tour from "@/components/home/Tour"
import Carrousel from "@/components/home/Carrousel"
import { useEffect, useState } from "react"
import { getData, getDataByOrder } from "@/services/getFromDb"
import Layout from "@/components/home/Layout"
import Flags from "@/components/Flags"

const notInDatabase = [
  {
    tourHeader: 'Our Tours', navList: ['About', 'Tours', 'Contact'], explore: `Let's explore together!`, talk: 'LETS TALK', thankYou: 'Thank you for visiting'
  },
  {
    tourHeader: 'Nuestros Tours', navList: ['Quienes somos', 'Tours', 'Contacto'], explore: `¡Exploremos juntos!`, talk: 'HABLEMOS', thankYou: 'Gracias por su visita'
  },
  {
    tourHeader: 'Nossos Passeios', navList: ['Quem somos', 'Passeios', 'Contato'], explore: `Vamos explorar juntos!`, talk: 'VAMOS CONVERSAR', thankYou: 'Obrigado pela visita'
  },
]

export default function Home({ allTours, carrouselImages, allTextOnPage }) {
  const [activeDot, setActiveDot] = useState(0)
  const [tours, setTours] = useState(allTours.en)
  const [pageInfo, setPageData] = useState(allTextOnPage.en)

  const handleLangaugePress = (language) => {
    setTours(allTours[language])
    setPageData(allTextOnPage[language])
  }

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
        <title>{pageInfo.webpageTitle}</title>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBLDKCL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </Head>

      <Flags style='absolute top-8 left-12 z-50 flex gap-4' handleLangauge={handleLangaugePress} />

      <Layout whatsappNumber={pageInfo.whatsapp}>

        {/* <!-- CARROUSEL SECTION --> */}
        <Carrousel
          header={'Our Tours'}
          images={carrouselImages}
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

        {/* <!-- ABOUT SECTION --> */}
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
              <h2 className="about-tittle-mobile">{pageInfo.aboutTitle.split('<br/>').join(' ')}</h2>
              <h2 className="about-h text-2xl">{pageInfo.aboutTitle.split('<br/>')[0]}</h2>
              <h2 className="about-h-big">
                {pageInfo.aboutTitle.split('<br/>')[1] ? pageInfo.aboutTitle.split('<br/>')[1] : ''}
              </h2>
              <p className="about-p text-base leading-tight" dangerouslySetInnerHTML={{ __html: pageInfo.aboutUsInfo }} />
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
              </div>{pageInfo.plus.slice(0, 5)}
                <br />
                {pageInfo.plus.slice(5)}</h2>
            </div>
            <div className="plus-txt leading-tight">
              <p>{pageInfo.plusText}</p>
            </div>
          </div>
        </div>

        {/* <!-- CALL TO ACTION --> */}
        <div className="contains-call leading-tight">
          <section className="call">
            <Image className="call-img" src={magicTitle} alt="magic title" />
            <h2 id="contact" className="text-2xl">{pageInfo.callToAction[0]}</h2>
            <p>{pageInfo.callToAction[1]}</p>
            {/* <!-- <button className="button"><a href="mailto:yourfriendinmendoza@gmail.com">EMAIL ME</a></button> --> */}
            <button className="button">
              <a href={`https://api.whatsapp.com/send/?phone=${pageInfo.whatsapp}&text&app_absent=0`} target="_blank">{pageInfo.callToAction[2]}</a>
            </button>
          </section>
        </div>

      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const [tourDataEn, tourDataEs, tourDataPort, pageInfoEn, pageInfoEs, pageInfoPort] = await Promise.all([
    getDataByOrder('tours', 'title', 'asc', true),
    getDataByOrder('tours-es', 'title', 'asc', true),
    getDataByOrder('tours-port', 'title', 'asc', true),
    getData('page-info'),
    getData('page-info-es'),
    getData('page-info-port')
  ])
  const carrouselImages = tourDataEn.map(({ images }) => images[0])

  return {
    props: {
      carrouselImages,
      allTours: {
        en: tourDataEn,
        es: tourDataEs,
        port: tourDataPort
      },
      allTextOnPage: {
        en: pageInfoEn[0],
        es: pageInfoEs[0],
        port: pageInfoPort[0]
      }
    }
  }
}