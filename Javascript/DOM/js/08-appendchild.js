var elemento;
var newNav;

console.log("Crear un nuevo link y añadirlo al menu navegacion");

//creamos el elemento
elemento = document.createElement("A");

//le ponemos contenido, texto
elemento.textContent = "NUEVO ELEMENTO"

//le asignamos una ruta
elemento.href = "/nou enllaç"

//agregamos el enlace a donde queremos meterlo
newNav = document.querySelector(".navegacion");
newNav.appendChild(elemento);

console.log(elemento);