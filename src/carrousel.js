const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')


// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33.3

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')
        
    })
})



//  LOGICA PARA MOSTRAR LOS TEMPLATES

const punto1 = document.getElementById("punto1")
const punto2 = document.getElementById("punto2")
const punto3 = document.getElementById("punto3")

// div donde va a ir el fragment
const div = document.getElementById("tour-info")
let fragment = document.createDocumentFragment();

// templates
const template1 = document.getElementById("template-1").content
const template2 = document.getElementById("template-2").content
const template3 = document.getElementById("template-3").content

// al principio tiene abierto el template 1
const defaultTemplate = template1.cloneNode(true);
fragment.appendChild(defaultTemplate);
div.appendChild(fragment);



// manejar el ver mas
function handleTourBtn (){

    const tourBtn = document.querySelector(".tour-btn")
    const tourDiv = document.querySelector(".tour-div")
    tourBtn.innerHTML = "See more"
    if(tourDiv.classList.contains("tour-div-hiden")){
        console.log("contiene tour-div-hiden")
        tourBtn.innerHTML = "X"
        tourDiv.classList.remove("tour-div-hiden")
    }else{
        console.log("no contiene tour-div-hiden")
        tourBtn.innerHTML = "See more"
        tourDiv.classList.add("tour-div-hiden")
    }
}

// POR DEFECTO
div.innerHTML = "";
console.log("Punto 1 contiene la clase activo")
const clone = template1.cloneNode(true);
fragment.appendChild(clone);
div.appendChild(fragment);

const tourBtn = document.querySelector(".tour-btn")
tourBtn.addEventListener("click", handleTourBtn)


punto.forEach( (cadaPunto) =>{
    cadaPunto.addEventListener("click", ()=>{
        
        if(punto1.classList.contains("activo")){
            div.innerHTML = "";
            console.log("Punto 1 contiene la clase activo")
            const clone = template1.cloneNode(true);
            fragment.appendChild(clone);
            div.appendChild(fragment);
            
            const tourBtn = document.querySelector(".tour-btn")
            tourBtn.addEventListener("click", handleTourBtn)
            
            
        }
        
        if(punto2.classList.contains("activo")){
            div.innerHTML = "";
            console.log("Punto 2 contiene la clase activo")
            const clone = template2.cloneNode(true);
            fragment.appendChild(clone);
            div.appendChild(fragment);
            
            const tourBtn = document.querySelector(".tour-btn")
            tourBtn.addEventListener("click", handleTourBtn)
        }
        
        if(punto3.classList.contains("activo")){
            div.innerHTML = "";
            console.log("Punto 3 contiene la clase activo")
            const clone = template3.cloneNode(true);
            fragment.appendChild(clone);
            div.appendChild(fragment);
            
            const tourBtn = document.querySelector(".tour-btn")
            tourBtn.addEventListener("click", handleTourBtn)
            
        }
    })
})

