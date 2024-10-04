const imagenes=document.querySelectorAll(".img-galeria")
const imageneslight=document.querySelector(".agregar-imagen")
const contenedorLight =document.querySelector(".imagen-light")


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimagen(imagen.getAttribute("src"))

    })
})

const ejecutarimagen= (imagen)=>{
    imageneslight.src = imagen;
    contenedorLight.classList.toggle("show")
    contenedorLight.classList.toggle("showimagen")
}