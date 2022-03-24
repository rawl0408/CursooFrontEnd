//EJECICIO 1

let esCorrecte = false;

if (esCorrecte) {
    console.log("EX1: La variable es true");
} else {
    console.log("EX1: La variable es false")
}

//EJERCICIO 2

var num1 = 3;
var num2 = 4;

if ((num1 < 5) && (num2 == 4)) {
    console.log("EX2: La condición es TRUE");
} else {
    console.log("EX2: La condición es FALSE");
}

if ((num1 == 2) || (num2 < 3 )) {
    console.log("EX3: La condición es TRUE");
} else {
    console.log("EX3: La condición es FALSE");
}

//EJERCICIO 3

//////a///////

var ejercicio1 = 2 < 12;

if (ejercicio1) {
    console.log("3-a: La variable es true");
} else {
    console.log("3-a: La variable es false");
}

//////b///////

var ejercicio2 = 2 < "12";

if (ejercicio2) {
    console.log("3-b: La variable es true");
} else {
    console.log("3-b: La variable es false");
}

//////c///////

var ejercicio3 = "2" < "12";

if (ejercicio3) {
    console.log("3-c: La variable es true");
} else {
    console.log("3-c: La variable es false");
}

//////d///////

var ejercicio4 = !("2" < "12");

if (ejercicio4) {
    console.log("3-d: La variable es true");
} else {
    console.log("3-d: La variable es false");
}

//////e///////

var ejercicio5 = ((2 < "12") && (2 == "2"));

if (ejercicio5) {
    console.log("3-e: La variable es true");
} else {
    console.log("3-e: La variable es false");
}

//////f///////

var ejercicio6 = (("2" < "12") || (2 < 12));

if (ejercicio6) {
    console.log("3-f: La variable es true");
} else {
    console.log("3-f: La variable es false");
}


//////g///////

var ejercicio7 = (("2" < "12") && (2 < 12));
if (ejercicio7) {
    console.log("3-g: La variable es true");
} else {
    console.log("3-g: La variable es false");
}


