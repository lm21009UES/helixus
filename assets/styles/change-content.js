// Seleccionamos los enlaces y el div de contenido
var home = document.getElementById("home");
var buttons = document.getElementById("buttons");
var forms = document.getElementById("formularies");
var cards = document.getElementById("cards");
var alerts = document.getElementById("alerts");
var navbars = document.getElementById("navbars");
var badges_shadows = document.getElementById("badges-shadows");
var containers = document.getElementById("containers");
var destiny = document.getElementById("content");

// Agregamos un evento de clic a cada enlace
home.addEventListener("click", function() {
    cargarContenido("index.html");
});

buttons.addEventListener("click", function() {
    cargarContenido("./assets/www/buttons.html");
});

forms.addEventListener("click", function() {
    cargarContenido("./assets/www/formularies.html");
});

cards.addEventListener("click", function() {
    cargarContenido("./assets/www/cards.html");
});

alerts.addEventListener("click", function() {
    cargarContenido("./assets/www/alerts.html");
});

navbars.addEventListener("click", function() {
    cargarContenido("./assets/www/navbars.html");
});

badges_shadows.addEventListener("click", function() {
    cargarContenido("./assets/www/badges-shadows.html");
});

containers.addEventListener("click", function() {
    cargarContenido("assets/www/containers.html");
});

// Función para cargar el contenido de la página HTML y reemplazar el contenido del div
function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            destiny.innerHTML = data;
        });
}
