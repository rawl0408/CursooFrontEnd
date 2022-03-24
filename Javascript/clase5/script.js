//EJECICIO 1


let producto = ' Monitor 20 Pulgadas ';

console.log(producto);

console.log(producto.length);

console.log(producto.trimStart().length);

console.log(producto.length);

//EJERCICIO 2
//a
let pantalla = 'Monitor 20 Pulgadas';

pantalla.replace("20", "40").replace("Pulgadas", "'")
console.log(pantalla);

//*** TAMBIEN SE PUEDE HACER ASI ***
// let cambiarPalabra = pantalla.replace("Pulgadas", "'")
// console.log(cambiarPalabra);

//b
var descripcionProducto = "Monitor 40 '"
var posicionPulgadas = descripcionProducto.indexOf("40 '");
var pulgadas = descripcionProducto.slice(posicionPulgadas);
console.log("new pulgadas: " + pulgadas);

//c
var descripcionProducto = "Monitor 20 '";
var posicionInicio = descripcionProducto.indexOf("n");
var corte = descripcionProducto.slice(posicionInicio);
console.log("el corte esta en: " + corte);



//d
var realNom = "Raul";
var primeraLetra = realNom.slice(0,1);
console.log(primeraLetra);

//EJERCICIO 3
//en este caso es para entender que el resultado se guarda en una nueva variable y si haces
//console log de esa variable si que te saldra el resultado GUARDADO y OK.

let actividad = 'Estoy aprendiendo Javascript Moderno';
newActividad = actividad.split(" ");
console.log(newActividad);

//en este caso no se guarda en ningun lado, simplemente lo haces en console.log para verlo únicamente,
//si ponemos un log de hobbies veriamos queno se ha guardado después

let hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split("-"));

console.log(hobbies);

//EJERCICIO 4

let producto1 = 'Monitor 24 pulgadas ';
console.log(producto1.toUpperCase());
console.log(producto1.toLowerCase());

//EJERCICIO 5

//let frase = prompt("Escribe la frase");
let frase = ("la laura se tira pedos");

//let palabra = prompt("Escribe la palabra que quieres buscar");
let palabra = ("laura");

var buscar = frase.indexOf(palabra);

if (buscar == -1) {
    document.write("La palabra no se encuentra en la frase.");
} else {
    document.write("La palabra esta en la posición: " + buscar + "<br>")
}

