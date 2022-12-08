const hamburger = document.querySelector(".hamburger")
const header2 = document.getElementById("header2")

function handleToggle(){
    hamburger.classList.toggle("is-active")
    header2.classList.toggle("header2-active")
}