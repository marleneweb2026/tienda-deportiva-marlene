// BOTÓN VER PRODUCTOS

const botonProductos = document.getElementById("botonProductos");

botonProductos.addEventListener("click", function() {

    document.getElementById("productos").scrollIntoView({
        behavior: "smooth"
    });

});



// CARRUSEL DE OFERTAS

const imagenCarrusel = document.getElementById("imagenCarrusel");

const anterior = document.getElementById("anterior");

const siguiente = document.getElementById("siguiente");


const imagenes = [
    "imagenes/oferta.jpg",
    "imagenes/oferta2.jpg",
    "imagenes/oferta3.jpg",
    "imagenes/oferta4.jpg",
    "imagenes/oferta5.jpg",
    "imagenes/oferta6.jpg"
];


let indice = 0;


function mostrarImagen() {

    imagenCarrusel.src = imagenes[indice];

}


siguiente.addEventListener("click", function() {

    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    mostrarImagen();

});


anterior.addEventListener("click", function() {

    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    mostrarImagen();

});
