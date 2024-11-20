/*constantes a utilizar */
const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const imagenes = document.querySelectorAll("img");
const btnTodos = document.querySelector('.todos');
const btnEnsalada = document.querySelector('.ensalada');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener("DOMContentLoaded", () => {
    eventos();
platillos();
});

const eventos = () => {
    menu.addEventListener("click", abrirmenu);

}
/* para abrir el menu*/
const abrirmenu = () => {
    navegacion.classList.remove("ocultar");
    botonCerrar();
}
/*creando el icono x con js y removiendo el mismo para evitar que se siga creando*/
const botonCerrar = () => {
    const btnCerrar = document.createElement("p");
    const overlay = document.createElement("div");
    overlay.classList.add("pantalla-completa");
    const body = document.querySelector("body");
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add("btn-cerrar");
    while (navegacion.children[5]) {
        navegacion.removeChild(navegacion.children[5]);
    }
    navegacion.appendChild(btnCerrar);
    cerrarmenu(btnCerrar, overlay);

}
/*cargar imagenes con js*/
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});
/*cargar las imagenes con js*/
imagenes.forEach(imagen => {
    observer.observe(imagen);
});
/*cerrar el menu y añadir la clase ocultar*/
const cerrarmenu = (boton, overlay) => {
    boton.addEventListener("click", () => {
        navegacion.classList.add("ocultar");
        overlay.remove();
        boton.remove();
    });
/*quitar la clase ocultar*/
    overlay.onclick = function () {
        overlay.remove();
        navegacion.classList.add("ocultar");
        boton.remove();
    }
}

/*filtrar los platillos por cada boton*/
const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo') === 'ensalada');
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter(postres=> postres.getAttribute('data-platillo') === 'postres');

    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);

}
/*mostrar los platillos*/
const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) =>{
      /*evento btn Ensalada para agregar unicamente los platillos con la clase ensalada al boton*/
    btnEnsalada.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));
    });
  /*evento btn pasta para agregar unicamente los platillos dcon la clase pasta al boton*/
    btnPasta.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta));
    });
  /*evento btn pizza para agregar unicamente los platillos dcon la clase Pizza al boton*/
    btnPizza.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza));
    });
    /*evento btn postres para agregar unicamente los platillos dcon la clase postres al boton*/
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postres=> contenedorPlatillos.appendChild(postres));
    });
    /*evento btn todos para limpiar todo el html y cargar todos los platillos*/
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}
/*limpiar el html para que solo se vean las imagenes del boton presionado*/
const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}





