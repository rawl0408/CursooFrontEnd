//EJERCICIO 1

// var factorial = 1;
// var numero = 5;

// while (numero > 1) {
//     factorial = factorial * numero;
//     numero--;
// }

// document.write("Ex1: El factorial és " + factorial + "");



//EJERCICIO 2


// //declaro variables del random con MAth que va de 1 a 10
// var numRandom = Math.floor(Math.random() * 10 + 1);

// //quiero esto para saber el random sin tener que buscarlo, una trampa
// console.log("Trampa para saber el RANDOM => (" + numRandom + ")");

// //declaro la variable del numero que pediré, pero no le asigno nada
// var numSecreto = "";

// //creo un contador para que tenga 5 intentos para adivinar el numero
// var contador = 5;

// do {
//     //este promp siempre se va a mostrar, porque la condicion es el while
//     numSecreto = prompt("Escribe un número del 1 al 10 para adivinarlo. Te quedan: (" + contador + ") intento/s.");

//     //el WHILE trabajará "mientras random NO sea igual al num escrito y el contador sea igual a 0", cuando si haga match, saldrá
// } while (numRandom != numSecreto && --contador > 0);

// //esta variable sirve para restar el numero de intentos con el contador actual, para así saber cuantos intentos se necesitaron para acertar
// //la he creado debajo del do-While porque javascript lee en estilo cascada y me interesa que se compruebe justo aquí
// //le puse 6 porque si ponia 5, es como si no contase "el acierto", si era el 2 y ponia 3 y 2, me decia que habia hastado 1 intento, y son 2.
// var contadorFinal = 6 - contador;

// //el if es el que me valida si lo acierto o no, cuando se cumpla todo (if-Else y do-While), saldra de ambos y adios ciclo
// if (numRandom == numSecreto) {
//     alert("Has acertado el numero! Es el -> (" + numSecreto + "). Lo has adivinado en (" + contadorFinal + ") intento/s.")
// } else {
//     alert("Has gastado tus 5 intentos, has perdido! El número era el (" + numRandom + ").")
// }


//EJERCICIO 3

let word = "";
let contador = 0;
const password = "Fin";
const lista = [];


do {
    word = prompt("Escribe una palabra.")
    lista.push(word);
    contador++
    
} while (word !== password);

document.write("Has introducido (" + contador + ") palabras. <br>");
document.write("Estas son las palabras introducidas: (" + lista + ").");






















