// SCROLL
const header = document.getElementById("header")

header.addEventListener(scrollY, () =>{
    header.classList.toggle("scrolled", window.scrollY>80)
})