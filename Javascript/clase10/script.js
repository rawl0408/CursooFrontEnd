//EJERCICIO 1

// function Saludar (nom, cognom, sexe){

//     let saludo = "";

//     if (sexe == "dona") {
//         saludo = console.log("Benvinguda " + nom + " " + cognom);
//     } else if (sexe == "home") {
//         saludo = console.log("Benvingut " + nom + " " + cognom);
//     } else {
//         saludo = console.log("Hola " + nom + " " + cognom);
//     }

// }

// Saludar("Raul", "Garcia", "home");
// Saludar("Marta", "Calzado", "dona");
// Saludar("David", "Lozano");


//EJERCICIO 2

// function edadPerro(fecha){

//     var hoy = 2022;

//     var edad = hoy - fecha;


//     console.log("El perro tiene " + edad + " años");

//     if (edad < 5) {
//         return true;
//     } else {
//         return false;
//     }

// }

// var esJoven = false;

// esJoven = edadPerro(1992);
// console.log(esJoven);
// esJoven = edadPerro(1980);
// console.log(esJoven);
// esJoven = edadPerro(2021);
// console.log(esJoven);

//EJERCICIO 3

// function compararValores(val1, val2){

// let menor = val1 < val2 ? val1 : val2;

// // if (val1<val2) {
// //     menor=val1;
// // } else {
// //     menor=val2
// // }
// return menor;

// }


// console.log(compararValores(8,6));

// minim = compararValores(2,9);
// console.log(minim);

// minim = compararValores(3,3);
// console.log(minim);

//EJERCICIO 4

// function sumaFrases(frase1, frase2){
//     let total = frase1 + frase2;
//     return total.length;
// }

// let frase1 = "Hola que tal amigo";
// let frase2 = "Bienvenido amiguitow, que te pa";

// let totalCaracteres = sumaFrases(frase1, frase2);
// console.log(totalCaracteres);

// console.log(sumaFrases(frase1, frase2));

//EJERCICIO 5


// sumar();
// function sumar() {
// console.log(2 + 2);
// }

// //

// sumar2();
// const sumar2 = function() {
// console.log(3 + 3);
// }


//EJERCICIO 6


//EJERCICIO 7



//funcion para imprimi la primera mitad de la frase
// function primeraMitad(frase){
//     let posicionFrase = Math.round(frase.length / 2);
//     let cortarFrase = frase.slice(0,posicionFrase);

//     console.log("La mitad de la frase es: " + "(" + cortarFrase + ")");
// }

// let fraseOK = "Estamos aprendiendo Programacion";
// primeraMitad(fraseOK);


// //funcion para enseñar la ultima letra
// function ultimaLetra(frase){
//     let lastWord = frase.slice(-1)

//     console.log("La ultima palabra de la frase es: " + "(" + lastWord + ")");
// }

// let fraseOK1 = "Tengo conocimientos";
// ultimaLetra(fraseOK1);

// //funcion para ivnertir una frase
// function invertirFrase(frase){
//     let inversion = frase.split("").reverse().join("");
//     console.log(inversion);
// }

// let fraseOK2 = "Super califrag ilistico espialidoso";
// invertirFrase(fraseOK2);

// //funcion para separar las letras con guin
// function separarGuion(frase){

//     let guion = frase.split("").join("-");
//     console.log(guion);
    
// }

// let fraseOK3 = "Super califrag ilistico espialidoso";
// separarGuion(fraseOK3);

//funcion para saber la cantidad de vocales

//EJERCICIO 8
//hacer un dni, mirar internet, se divide el numero entre 23 y el % se compara con .test creo para hacer match

//EJERCICIO 9
//hacer una funcion para cada cosa que pide, son iguales lo unico que cambian las validaciones

//EJERCICIO 10
//hacer random y luego mirar en 5 chances con un FOR a cual pertenece del string que nos ha dado