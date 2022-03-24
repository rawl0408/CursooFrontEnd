var elemento;

console.log("Mostramos la primera .card:");

elemento = document.querySelectorAll(".card")[0];
console.log(elemento);

console.log("-------------------------------");
console.log("Mostramos L’element de la classe info del contenidor premium:");

elemento = document.querySelector(".premium > .info");
console.log(elemento);

console.log("-------------------------------");
console.log("Mostramos La segona card de hospedaje:");

elemento = document.querySelectorAll(".hospedaje .card")[1];
console.log(elemento);

console.log("-------------------------------");
console.log("Mostramos el formulario por id:");

elemento = document.querySelector("form#formulario");
console.log(elemento);

console.log("-------------------------------");
console.log("Mostramos nav:");

elemento = document.querySelector("nav");
console.log(elemento);