
//EJERCICIO 1

//EJEMPLO 1 de CALCULAR Miliseconds enter hoy y tu cumple con Date.now().

//var ahora = new Date();
var birthday = new Date(1992,8,4);

var miliseconds = Date.now() - birthday.getTime();

console.log("EJEMPLO 1: Faltan " + miliseconds + " miliseconds pel meu aniversari");



//EJEMPLO 2 de CALCULAR Miliseconds enter hoy y tu cumple con una variable creada del dia de HOY y mi cumple, 
//luego restando milisegundos de las dos variables.

var ahora = new Date();
var birthday = new Date(1992,8,4);

var miliseconds = ahora.getTime() - birthday.getTime();

console.log("EJEMPLO 2: Faltan " + miliseconds + " miliseconds pel meu aniversari");


//EJERCICIO 2

var horaActual = new Date();

var asignoHora = horaActual.setHours(26);
console.log("La hora actual es: " + asignoHora);
var asignoMinutos = horaActual.setMinutes(65);
console.log("La hora actual es: " + asignoMinutos);
var asignoSegundos = horaActual.setDate(35);
console.log("La hora actual es: " + asignoSegundos);

console.log(horaActual);
