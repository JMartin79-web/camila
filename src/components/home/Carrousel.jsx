import { useMemo, useState } from 'react'

const magic = "https://firebasestorage.googleapis.com/v0/b/yourfriendinmendoza-a49d2.appspot.com/o/magia.png?alt=media&token=93df8378-d9fe-436b-91b9-833a707eca7a"

export default function Carrousel({ header, images, activeDot, setActiveDot }) {
    const [operacion, setOperacion] = useState(0)
    const percentage = useMemo(() => 100 / images?.length, [images])

    const handleSlide = (index) => {
        const position = index * -percentage
        setOperacion(position)
        setActiveDot(index)
    }

    const handleNext = () => {
        if (activeDot + 1 === images.length) {
            setOperacion(0)
            setActiveDot(0)
        } else {
            setOperacion(prev => prev + -percentage)
            setActiveDot(prev => prev + 1)
        }
    }

    const handlePrevious = () => {
        if (activeDot === 0) {
            setOperacion((images.length - 1) * -percentage)
            setActiveDot(images.length - 1)
        } else {
            setOperacion(prev => prev - -percentage)
            setActiveDot(prev => prev - 1)
        }
    }

    return (
        <div className="contains-carrousel">

            <div className="carrousel-title">
                <div className="bg-div-title">
                    <div className="bg-title"></div>
                    <div className="bg-title"></div>
                </div>

                <div className="title-txt text-2xl">

                    <h2 id="tours">{header}
                        <div className="contains-magia">
                            <div className="magia">
                                <img width={25} src={magic} alt="" />
                            </div>
                        </div>
                    </h2>
                </div>
            </div>

            <div className="carrousel-div">
                <div className="carrousel">
                    <div className="grande" style={{ width: `${images?.length * 100}%`, transform: `translateX(${operacion}%)` }}>

                        {images?.map((src, index) => (
                            <div className="carrousel-div-img" key={src}>
                                <img src={src} alt={`Imagen ${index}`} className="" />
                            </div>
                        ))}

                    </div>

                    <div className="contains-puntos">
                        <ul className="puntos">
                            <li id="flecha-atras" className="flecha" onClick={handlePrevious}></li>

                            {images?.map((src, index) => (
                                <li key={src + index}
                                    id={`punto${index + 1}`}
                                    className={activeDot === index ? 'punto activo' : 'punto'}
                                    onClick={() => handleSlide(index)}
                                >
                                </li>
                            ))}

                            <li id="flecha-adelante" className="flecha" onClick={handleNext}></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
