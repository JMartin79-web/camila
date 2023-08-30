import Image from 'next/image'
import img1 from "../assets/fotos/tour1-grande.jpg"
import img2 from "../assets/fotos/tour_montaña_2.jpg"
import img3 from "../assets/fotos/la_alejandra_2.jpg"
import magic from "../assets/fotos/magia.png"

// const grande = document.querySelector('.grande')
// const punto = document.querySelectorAll('.punto')

// punto.forEach( ( cadaPunto , i )=> {
//     // Asignamos un CLICK a cadaPunto
//     punto[i].addEventListener('click',()=>{

//         // Guardar la posición de ese PUNTO
//         let posicion  = i
//         // Calculando el espacio que debe DESPLAZARSE el GRANDE
//         let operacion = posicion * -33.3

//         // MOVEMOS el grand
//         grande.style.transform = `translateX(${ operacion }%)`
//         console.log("operacion: ", operacion)
//         // Recorremos TODOS los punto
//         punto.forEach( ( cadaPunto , i )=>{
//             // Quitamos la clase ACTIVO a TODOS los punto
//             punto[i].classList.remove('activo')
//         })
//         // Añadir la clase activo en el punto que hemos hecho CLICK
//         punto[i].classList.add('activo')

//     })
// })

// //  LOGICA PARA MOSTRAR LOS TEMPLATES
// const punto1 = document.getElementById("punto1")
// const punto2 = document.getElementById("punto2")
// const punto3 = document.getElementById("punto3")

// // div donde va a ir el fragment
// const div = document.getElementById("tour-info")
// let fragment = document.createDocumentFragment();

// // templates
// const template1 = document.getElementById("template-1").content
// const template2 = document.getElementById("template-2").content
// const template3 = document.getElementById("template-3").content

// // al principio tiene abierto el template 1
// const defaultTemplate = template1.cloneNode(true);
// fragment.appendChild(defaultTemplate);
// div.appendChild(fragment);

// // manejar el ver mas
// function handleTourBtn (){
//     const tourBtn = document.querySelector(".tour-btn")
//     const tourDiv = document.querySelector(".tour-div")
//     tourBtn.innerHTML = "See more"
//     if(tourDiv.classList.contains("tour-div-hiden")){
//         console.log("contiene tour-div-hiden")
//         tourBtn.innerHTML = "X"
//         tourDiv.classList.remove("tour-div-hiden")
//     }else{
//         console.log("no contiene tour-div-hiden")
//         tourBtn.innerHTML = "See more"
//         tourDiv.classList.add("tour-div-hiden")
//     }
// }

// // POR DEFECTO
// div.innerHTML = "";
// console.log("Punto 1 contiene la clase activo")
// const clone = template1.cloneNode(true);
// fragment.appendChild(clone);
// div.appendChild(fragment);

// punto.forEach( (cadaPunto) =>{
//     cadaPunto.addEventListener("click", ()=>{

//         if(punto1.classList.contains("activo")){
//             div.innerHTML = "";
//             console.log("Punto 1 contiene la clase activo")
//             const clone = template1.cloneNode(true);
//             fragment.appendChild(clone);
//             div.appendChild(fragment);
//         }

//         if(punto2.classList.contains("activo")){
//             div.innerHTML = "";
//             console.log("Punto 2 contiene la clase activo")
//             const clone = template2.cloneNode(true);
//             fragment.appendChild(clone);
//             div.appendChild(fragment);
//         }

//         if(punto3.classList.contains("activo")){
//             div.innerHTML = "";
//             console.log("Punto 3 contiene la clase activo")
//             const clone = template3.cloneNode(true);
//             fragment.appendChild(clone);
//             div.appendChild(fragment);
//         }
//     })
// })

// const arrowBack = document.getElementById("flecha-atras")
// const arrowFront = document.getElementById("flecha-adelante")

// arrowBack.addEventListener("click", arrow =>{

//     // punto 3 a 2
//     if(punto3.classList.contains("activo")){
//         arrow.stopPropagation()
//         let operacion = -33.3
//         grande.style.transform =`translateX(${ operacion }%)`
//         div.innerHTML = "";

//         punto3.classList.remove('activo')
//         punto2.classList.add('activo')

//         console.log("Punto 2 contiene la clase activo")
//         const clone = template2.cloneNode(true);
//         fragment.appendChild(clone);
//         div.appendChild(fragment);
//     }
//     // punto 2 a 1
//     else if(punto2.classList.contains("activo")){
//         arrow.stopPropagation()
//         let operacion = -0
//         grande.style.transform =`translateX(${ operacion }%)`
//         div.innerHTML = "";

//         punto2.classList.remove('activo')
//         punto1.classList.add('activo')

//         console.log("Punto 1 contiene la clase activo")
//         const clone = template1.cloneNode(true);
//         fragment.appendChild(clone);
//         div.appendChild(fragment);
//     }

//     // punto 1 a 3
//     else{
//         arrow.stopPropagation()
//         let operacion = -66.6
//         grande.style.transform =`translateX(${ operacion }%)`
//         div.innerHTML = "";

//         punto1.classList.remove('activo')
//         punto3.classList.add('activo')

//         console.log("Punto 3 contiene la clase activo")
//         const clone = template3.cloneNode(true);
//         fragment.appendChild(clone);
//         div.appendChild(fragment);
//     }
// })   


// arrowFront.addEventListener("click", arrow =>{

//     // punto 1 a 2
//     if(punto1.classList.contains("activo")){
//         arrow.stopPropagation()
//         let operacion = -33.3
//         grande.style.transform =`translateX(${ operacion }%)`
//         div.innerHTML = "";

//         punto1.classList.remove('activo')
//         punto2.classList.add('activo')

//         console.log("Punto 2 contiene la clase activo")
//         const clone = template2.cloneNode(true);
//         fragment.appendChild(clone);
//         div.appendChild(fragment);
//     }
//     // punto 2 a 3
//     else if(punto2.classList.contains("activo")){
//         arrow.stopPropagation()
//         let operacion = -66.6
//         grande.style.transform =`translateX(${ operacion }%)`
//         div.innerHTML = "";

//         punto2.classList.remove('activo')
//         punto3.classList.add('activo')

//         console.log("Punto 3 contiene la clase activo")
//         const clone = template3.cloneNode(true);
//         fragment.appendChild(clone);
//         div.appendChild(fragment);
//     }

//     // punto 3 a 1
//     else{
//         arrow.stopPropagation()
//         let operacion = -0
//         grande.style.transform =`translateX(${ operacion }%)`
//         div.innerHTML = "";

//         punto3.classList.remove('activo')
//         punto1.classList.add('activo')

//         console.log("Punto 1 contiene la clase activo")
//         const clone = template1.cloneNode(true);
//         fragment.appendChild(clone);
//         div.appendChild(fragment);
//     }

// })   

export default function Carrousel({ images }) {
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
                    <div className="grande">

                        {images?.map((src, index) => (
                            <div className="carrousel-div-img" key={src}>
                                <img width={'100%'} height={'100%'} src={src} alt={`Imagen ${index}`} className="img" />
                            </div>
                        ))}

                    </div>

                    <div className="contains-puntos">
                        <ul className="puntos">
                            <li id="flecha-atras" className="flecha"></li>
                            {images?.map((src, index) => (
                                <li key={src + index} id={`punto${index + 1}`} className={`punto`}></li>
                            ))}
                            {/* <li id="punto2" className="punto activo"></li>
                            <li id="punto3" className="punto"></li> */}
                            <li id="flecha-adelante" className="flecha"></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
