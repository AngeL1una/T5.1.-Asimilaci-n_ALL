
function cambiarTamañoImagen(event) {
    var imagen = event.target;
    
    if (imagen.style.width === "200px") {
        imagen.style.width = "300px";
    } else {
        imagen.style.width = "200px";
    }
}

// Agrega evento 
var imagenes = document.querySelectorAll(".imagen");
imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", cambiarTamañoImagen);
});

// Función para animar la imagen 
function animarImagen(event) {
    var imagen = event.target;
    
    imagen.style.transition = "transform 0.5s ease-in-out, width 0.5s ease-in-out";
    imagen.style.transform = "rotate(360deg)";
    imagen.style.width = "120%";
    
    setTimeout(function() {
        imagen.style.transform = "rotate(0deg)";
        imagen.style.width = "100%";
    }, 500);
}

var imagenes = document.querySelectorAll(".imagen");
imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", animarImagen);
});
        