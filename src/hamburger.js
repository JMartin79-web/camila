const header = document.getElementById("header")
const header2 = document.getElementById("header2")

const hamburger = document.querySelector(".hamburger")

function handleToggle(){
    hamburger.classList.toggle("is-active")
    header2.classList.toggle("header2-active")
    if(header2.classList.contains("header2-active")){
        header.classList.add("header-open")
    }else{
        header.classList.remove("header-open")
    }
}