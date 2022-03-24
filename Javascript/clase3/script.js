//Math.round hacia abajo

redondearAbajo = Math.round(24.49);
console.log("Redondear el numero hacia abajo de 24.49 es: " + redondearAbajo);

//Math.round hacia arriba

redondearArriba = Math.round(24.59);
console.log("Redondear el numero hacia arriba de 24.59 es: " + redondearArriba);

//Math.aqrt raiz cuadrada de un num

raiz = Math.sqrt(8);
console.log("La raiz cuadrada de 8 es: " + raiz);

//Math.abs retorna el valor absoluto

absoluto = Math.abs(-1);
console.log("El valor absoluto de -1 es: " + absoluto);

//Math.pow retorna la potencia de un numero

potencia = Math.pow(6,2);
console.log("La potencia del numero 6 elevado a 2 es: " + potencia);

//Math.min retorna el numero mas pequeño de los que hay introducidos

minimo = Math.min(4,6,7,1);
console.log("El numero mas pequeño de 4,6,7,1 es: " + minimo);

//Math.max retorna el numero mas grande de los que hay introducidos

maximo = Math.max(4,51,2,112);
console.log("El numero mas grande de 4,51,2,112 es: " + maximo);

//Math.random devuelve un numero aleatorio entre el 0 y el 1

aleatorio = Math.random();
console.log("El numero aleatorio entre 0 y 1 es: " + aleatorio);

//Math.random devuelve un numero aleatorio entre el 0 y el 30

aleatorioRango = Math.floor(Math.random()*30);
console.log("El numero aleatorio entre 0 y 30 es: " + aleatorioRango);

//Programa para que pida 2 numeros y haga el aleatorio entre esos dos

let pedirNumero1 = parseInt(prompt("Escribe el PRIMER numero"));
let pedirNumero2 = parseInt(prompt("Escribe el SEGUNDO numero"));
let numeroAleatorio = 0;

let minNumber = Math.min(pedirNumero1, pedirNumero2);
let maxNumber = Math.max(pedirNumero1, pedirNumero2);
numeroAleatorio = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
console.log("El numero aleatorio de los que has escrito es: " + numeroAleatorio);

// function getRandomNumber() {
//     var lower = parseInt(prompt("Escribe el primer número(pequeño)"));
//     var upper = parseInt(prompt("Escribe el segundo número(grande)"));
//     //comprobacion para ver si ambos numeros son numeros, si no son numeros salta error
//     if (isNaN(lower) || isNaN(upper) ) {
//       throw new Error("Debes escribir un número");
//     };

//     var preNumber = Math.random() * (upper - lower);
//     if(Math.random() < 0.5){
//        return Math.ceil(preNumber) + lower; 
//     } else {
//       return Math.floor(preNumber) + lower; 
//     }      
//   }

  
//   console.log("El numero aleatorio de tus dos números es: " + getRandomNumber());