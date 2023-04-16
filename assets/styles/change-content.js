// Seleccionamos los enlaces y el div de contenido
var home = document.getElementById("home");
var buttons = document.getElementById("buttons");
var enlace2 = document.getElementById("enlace2");
var enlace3 = document.getElementById("enlace3");
var destiny = document.getElementById("content");

// Agregamos un evento de clic a cada enlace
home.addEventListener("click", function() {
    cargarContenido("index.html");
});

buttons.addEventListener("click", function() {
    cargarContenido("./assets/www/buttons.html");
});

enlace2.addEventListener("click", function() {
    cargarContenido("OtraPagina.html");
});

enlace3.addEventListener("click", function() {
    cargarContenido("OtraPaginaMas.html");
});

// Función para cargar el contenido de la página HTML y reemplazar el contenido del div
function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            destiny.innerHTML = data;
        });
}
