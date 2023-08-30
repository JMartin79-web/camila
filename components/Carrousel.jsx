import Image from 'next/image'
import magic from "../assets/fotos/magia.png"
import { useState } from 'react'

export default function Carrousel({ images, activeDot, setActiveDot }) {
    const [operacion, setOperacion] = useState('')

    const handleSlide = (index) => {
        const position = index * -33.3
        setOperacion(position)
        setActiveDot(index)
    }

    const handleNext = () => {
        if (activeDot + 1 === images.length) return
        setOperacion(prev => prev + -33.3)
        setActiveDot(prev => prev + 1)
    }

    const handlePrevious = () => {
        if (activeDot === 0) return
        setOperacion(prev => prev - -33.3)
        setActiveDot(prev => prev - 1)
    }

    return (
        <div className="contains-carrousel">

            <div className="carrousel-title">
                <div className="bg-div-title">
                    <div className="bg-title"></div>
                    <div className="bg-title"></div>
                </div>

                <div className="title-txt">

                    <h2 id="tours">Our tours
                        <div className="contains-magia">
                            <div className="magia">
                                <Image width={25} src={magic} alt="" />
                            </div>

                        </div>
                    </h2>
                </div>
            </div>

            <div className="carrousel-div">
                <div className="carrousel">
                    <div className="grande"
                        style={{ transform: `translateX(${operacion}%)` }}>

                        {images?.map((src, index) => (
                            <div className="carrousel-div-img" key={src}>
                                <img width={'100%'} height={'100%'} src={src} alt={`Imagen ${index}`} className="img" />
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
