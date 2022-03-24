//EJERCICIO 1

var cashDisponible = 5;
var totalCarrito = 5;

if (cashDisponible <= totalCarrito) {
    console.log("Ex1: Tienes suficiente dinero");
} else {
    console.log("Ex1: No tienes suficiente dinero");
}

//EJERCICIO 2

let rol = "AUTOR";

if (rol=="ADMIN") {
    console.log("Ex2: El Usuario puede editar, eliminar y ver toda la información");
} else if (rol=="EDITOR") {
    console.log("Ex2: El usuario solo puede editar sus registros");
} else if (rol=="AUTOR") {
    console.log("Ex2: El usuario solo puede registrar usuarios");
}else if (rol=="ANONYMOUS") {
    console.log("Ex2: El Usuario es visitante, solo puede ver la información");
}

//EJERCICIO 3

var metodoDePago = 0;

switch (metodoDePago) {
    case 1:
        console.log("Ex3: Has seleccionado pagar con Efectivo."); 
        break;
    case 2:        
        console.log("Ex3: Has seleccionado pagar con Codigo Promocional."); 
        break;
    case 3:        
        console.log("Ex3: Has seleccionado pagar con Tarjeta."); 
        break;

    default: console.log("Ex3: Debes seleccionar un metodo de pago correcto"); 

}
//EJERCICIO 4

var cash = true;
var totalCompra = 150;


if (cash==true && totalCompra >= 100) {
    console.log("Ex4: Puedes realizar la compra");
} else {
    console.log("Ex4: No puedes realizar la compra");
}

//EJERCICIO 5

cash == true && totalCompra >= 100 ? console.log("Ex5: Puedes realizar la compra") 
: console.log("Ex5: No puedes realizar la compra");

//EJERCICIO 6

//var nota = prompt("Escribe tu nota, del 0 al 10"); NO FUNCIONA POR PARSEINT
var nota = 0;

switch (nota) {
    case 0:
        console.log("Ex6: Molt deficient" + " (" + nota + ")");
        break;
    case 1:
        console.log("Ex6: Molt deficient" + " (" + nota + ")");
        break;
    case 2:
        console.log("Ex6: Molt deficient" + " (" + nota + ")");
        break;
    case 3:
        console.log("Ex6: Insuficient" + " (" + nota + ")");
        break;
    case 4:
        console.log("Ex6: Insuficient" + " (" + nota + ")");
        break;
    case 5:
        console.log("Ex6: Suficient" + " (" + nota + ")");
        break;
    case 6:
        console.log("Ex6: Bé" + " (" + nota + ")");
        break;
    case 7:
        console.log("Ex6: Bé" + " (" + nota + ")");
        break;
    case 8:
        console.log("Ex6: Notable" + " (" + nota + ")");
        break;
    case 9:
        console.log("Ex6: Notable" + " (" + nota + ")");
        break;
    case 10:
        console.log("Ex6: Excel·lent" + " (" + nota + ")");
        break;

}

//EJERCICIO 7

const age = '18';
if (age === 18) console.log('Ex7: You just became an adult :D oko');
if (age == 18) console.log('Ex7: You just became an adult :D OK');
//respota: el segundo if comprueba que la constante que hay declarada sea el mismo valor y la primera
//es si tiene mismo valor y tipo, como la const es un string y el if es un number, solo se cumple el segundo if 

//EJERCICIO 8

//escenari 1: “Pots comprar en efectiu o amb crèdit”
// let efectivoOK = 1000;
// let creditoOK = 1000;
// let disponibleOK = efectivoOK + creditoOK;
// let totalCarritoOK = 700;

//escenari 2: “Pots comprar en efectiu o amb crèdit”
// let efectivoOK = 300;
// let creditoOK = 400;
// let disponibleOK = efectivoOK + creditoOK;
// let totalCarritoOK = 700;

//escenari 3: “Pots comprar en efectiu o amb crèdit”
let efectivoOK = 300;
let creditoOK = 400;
let disponibleOK = efectivoOK + creditoOK;
let totalCarritoOK = 900;

if (efectivoOK >= totalCarritoOK || creditoOK >= totalCarritoOK) {
    console.log("Ex8: Pots comprar en efectiu o amb crèdit");
} else if (disponibleOK >= totalCarritoOK) {
    console.log("Ex8: Pots comprar fent us d’efectiu i crèdit");
} else  if (disponibleOK <= totalCarritoOK) {
    console.log("Ex8: No disposes de saldo disponible per fer la compra");
}