
const imagenes = document.querySelectorAll('.imagen-zoom');
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        imagen.classList.toggle('agrandada');
        imagenes.forEach(i => {
            if (i !== imagen) {
                i.classList.remove('agrandada');
            }
        });
    });
})