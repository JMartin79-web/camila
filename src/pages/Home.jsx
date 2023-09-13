import Tour from "../components/home/Tour"
import Carrousel from "../components/home/Carrousel"
import { useEffect, useState } from "react"
import { getData, getDataByOrder } from "../services/getFromDb"
import Layout from "../components/home/Layout"
import Flags from "../components/Flags"
import Loading from '../components/Loading'

const magicTitle = "https://firebasestorage.googleapis.com/v0/b/yourfriendinmendoza-a49d2.appspot.com/o/maiga-title.png?alt=media&token=38aaf826-9547-481a-831f-87b19de398a4"
const magic = "https://firebasestorage.googleapis.com/v0/b/yourfriendinmendoza-a49d2.appspot.com/o/magia.png?alt=media&token=93df8378-d9fe-436b-91b9-833a707eca7a"
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

export default function Home() {
  const [activeDot, setActiveDot] = useState(0)
  const [tours, setTours] = useState([])
  const [pageInfo, setPageData] = useState({})
  const [carrouselImages, setCarrouselImages] = useState([])
  const [allTours, setAllTours] = useState({})
  const [allTextOnPage, setAllTextOnPage] = useState({})
  const [loading, setLoading] = useState(true)

  const handleLangaugePress = (language) => {
    setTours(allTours[language])
    setPageData(allTextOnPage[language])
  }

  useEffect(() => {
    const fetch = async () => {
      const [tourDataEn, tourDataEs, tourDataPort, pageInfoEn, pageInfoEs, pageInfoPort] = await Promise.all([
        getDataByOrder('tours', 'title', 'asc', true),
        getDataByOrder('tours-es', 'title', 'asc', true),
        getDataByOrder('tours-port', 'title', 'asc', true),
        getData('page-info'),
        getData('page-info-es'),
        getData('page-info-port')
      ])
      const carrouselImagesData = tourDataEn.map(({ images }) => images[0])
      setCarrouselImages(carrouselImagesData)
      setAllTours({
        en: tourDataEn,
        es: tourDataEs,
        port: tourDataPort
      })
      setAllTextOnPage({
        en: { ...pageInfoEn[0], ...notInDatabase[0] },
        es: { ...pageInfoEs[0], ...notInDatabase[1] },
        port: { ...pageInfoPort[0], ...notInDatabase[2] }
      })
      setPageData({ ...pageInfoEn[0], ...notInDatabase[0] })
      setTours(tourDataEn)
      setTimeout(() => setLoading(false), 1000);
    }
    fetch()
  }, [])

  if(loading) return <Loading isLoading={loading} />

  return (
    <>
      <title>{`${pageInfo.webpageTitle} Mendoza`}</title>

      <Flags style='absolute top-8 left-12 z-50 flex gap-4' handleLangauge={handleLangaugePress} />

      <Layout whatsappNumber={pageInfo?.whatsapp}
        navList={pageInfo?.navList}
        yourFriend={pageInfo?.webpageTitle}
        explore={pageInfo?.explore}
        talk={pageInfo?.talk}
        thankYou={pageInfo?.thankYou}
      >

        {/* <!-- CARROUSEL SECTION --> */}
        <Carrousel
          header={pageInfo?.tourHeader}
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
              <h2 className="about-tittle-mobile">{pageInfo?.aboutTitle?.split('<br/>').join(' ')}</h2>
              <h2 className="about-h text-2xl">{pageInfo?.aboutTitle?.split('<br/>')[0]}</h2>
              <h2 className="about-h-big">
                {pageInfo?.aboutTitle?.split('<br/>')[1] ? pageInfo?.aboutTitle?.split('<br/>')[1] : ''}
              </h2>
              <p className="about-p text-base leading-tight" dangerouslySetInnerHTML={{ __html: pageInfo?.aboutUsInfo }} />
            </div>
          </section>
        </div>

        {/* <!-- PLUS --> */}
        <div className="contains-plus">
          <div className="plus">
            <div className="plus-title">
              <h2 className="text-2xl leading-tight"><div className="contains-plus-magia">
                <div className="plus-magia">
                  <img width={25} src={magic} alt="" />
                </div>
              </div>{pageInfo?.plus?.slice(0, 5)}
                <br />
                {pageInfo?.plus?.slice(5)}</h2>
            </div>
            <div className="plus-txt leading-tight">
              <p>{pageInfo?.plusText}</p>
            </div>
          </div>
        </div>

        {/* <!-- CALL TO ACTION --> */}
        <div className="contains-call leading-tight">
          <section className="call">
            <img className="call-img" src={magicTitle} alt="magic title" />
            <h2 id="contact" className="text-2xl">{pageInfo?.callToAction[0]}</h2>
            <p>{pageInfo?.callToAction[1]}</p>
            {/* <!-- <button className="button"><a href="mailto:yourfriendinmendoza@gmail.com">EMAIL ME</a></button> --> */}
            <button className="button">
              <a href={`https://api.whatsapp.com/send/?phone=${pageInfo?.whatsapp}&text&app_absent=0`} target="_blank">{pageInfo?.callToAction[2]}</a>
            </button>
          </section>
        </div>

      </Layout>
    </>
  )
}
