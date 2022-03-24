var elemento;

console.log("Modificamos el texto de (Encuentra hospedaje para tus próximas vacaciones): ");

elemento = document.querySelectorAll("#formulario")[0];
//elemento = document.querySelectorAll(".contenido-hero h1");
console.log(elemento);

elemento.innerHTML = "Texto modificado by RAWL"