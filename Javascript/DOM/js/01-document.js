var elemento;

console.log("Mostramos el elemento DOCUMENT:");

elemento = document;
console.log(elemento);

console.log("---------------------------");
console.log("Mostramos el elemento BODY:");

elemento = document.body;
console.log(elemento);

console.log("---------------------------");
console.log("Mostramos el elemento FORM:");

elemento = document.forms[0]; //este valor de 0 es que nos devuelve el primer form, si no ponemos nada, nos devolveria todos los forms
console.log(elemento);

console.log("---------------------------");
console.log("Mostramos el elemento LINKS:");

elemento = document.links;
console.log(elemento);

console.log("---------------------------");
console.log("Mostramos el elemento className de algunos links:");

elemento = document.links[4].className;
console.log(elemento);

console.log("---------------------------");
console.log("Mostramos el elemento TODAS LAS IMAGENES:");

elemento = document.images;
console.log(elemento);