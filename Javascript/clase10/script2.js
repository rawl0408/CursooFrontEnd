22222//EJERCICIO 1

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

// function numMin(num1, num2){

//     if (num1 > num2) {
//         console.log("El num pequeño es num2");
//         return num2 ;
//     } else if (num1 < num2) {
//         console.log("El num pequeño es num1");
//         return num1;
//     } else { (num1 == num2) 
//         console.log("Ambos son iguales");
//         return  num1;
//     }

// }
// var minimi;

// minimi=numMin(4,5)
// console.log(minimi );
// minimi=numMin(2,4)
// console.log(minimi );
// minimi=numMin(9,4)
// console.log(minimi );
// minimi=numMin(5,1)
// console.log(minimi );
// minimi=numMin(3,3)
// console.log(minimi );

//EJERCICIO 4

// function sumaFrases(string1, string2){

//     var sumado = string1.length + string2.length;
//     return sumado;

// }

// sumado = sumaFrases("hola que tal estas", "adios que tal te fue")
// console.log("La suma de las dos frases es: " + sumado);

// sumado = sumaFrases("mi nombre es Raul", "vete")
// console.log("La suma de las dos frases es: " + sumado);

// sumado = sumaFrases("ayer me rompi el codo", "que mala suerte tuviste")
// console.log("La suma de las dos frases es: " + sumado);

//EJERCICIO 5

// sumar();
// function sumar() {
// console.log(2 + 2);
// }

// //no se puede acceder a suma2, porque además de que está declarada como const, 
// //creo que no se puede asignar una variable a una funcion
// sumar2();
// const sumar2 = function() {
// console.log(3 + 3);
// }

//EJERCICIO 6

// function checkArroba(email){

//     if (email.includes('@')) {
//         console.log("Este mail SI incluye @");
//         return true;
//     } else {
//         console.log("Este mail NO incluye @");
//         return false;
//     }

// }

// mirarArroba = checkArroba("raulgarcia@gmail.com")
// console.log(mirarArroba);
// mirarArroba = checkArroba("lauragarciagmail.com")
// console.log(mirarArroba);
// mirarArroba = checkArroba("raulgutierrez@gmail.com")
// console.log(mirarArroba);
// mirarArroba = checkArroba("martagarciagmail.com")
// console.log(mirarArroba);

//EJERCICIO 7

// var frase = "Bienvenidos al curso de FrontEnt Vue UOC";

// function imprimirMitad(frase) {

// }
// function imprimirUltimoCaracter(frase) {

// }
// function imprimirInverso(frase) {

// }
// function imprimirConGuion(frase) {

// }
// function imprimirVocales(frase) {

// }

//EJERCICIO 9

function generadorCaptcha() {
    var captcha = "";
    var captchaChars = "1234567890abcdefghijklmnopqrstuvxyz";

    for (i = 0; i < 5; i++) {
        var numRandom = Math.floor (Math.random(captcha) * captchaChars.length);
        var chatRandom = captchaChars.charAt(numRandom);
        captcha += chatRandom;
    }

    console.log(captcha);

}

generadorCaptcha();