//TESTING

//EJERCICIO 1

// function leeNumeros(num1, num2){

//     var arrayNums = [];

//     for(let i = num1 + 1; i <= num2 - 1; i++){  
//         //console.log(i);  
//         arrayNums.push(i);
//         //console.log(arrayNums);
//     }
//     return arrayNums;
// }

// var nuewArr = leeNumeros(1,6)
// console.log(nuewArr);

// var nuewArr = leeNumeros(22,16)
// console.log(nuewArr);

//EJERCICIO 2

// function leeLetras(arrayLetras){

//     let retornaCaracter = []; //crear un  array vacio donde iremos introduciendo con el push

//     for (let i = 0; i < arrayLetras.length; i++) {
//         retornaCaracter.push(arrayLetras[i].length);
//         //console.log(arrayLetras[i]);
        
//     }
//     return retornaCaracter;
// }

// var palabras = ["bool", "programacion con visual", "javascript", "frontEndVue", "js"]

// console.log("Enseñamos las palabras: " + palabras,leeLetras(palabras));
// console.log("Enseñamos el numero de carácteres de cada palabra: " + leeLetras(palabras));

//EJERCICIO 3

const carrito = [{
    nombre: 'Monitor 20 Pulgadas',
    precio: 500
    },
    {
    nombre: 'Televisión 50 Pulgadas',
    precio: 700
    },
    {
    nombre: 'Tablet',
    precio: 300
    },
    {
    nombre: 'Audifonos',
    precio: 200
    },
    {
    nombre: 'Teclado',
    precio: 50
    },
    {
    nombre: 'Celular',
    precio: 500
    },
    {
    nombre: 'Bocinas',
    precio: 300
    },
    {
    nombre: 'Laptop',
    precio: 800
    },
];


//a) Mostrar tots els productes

for (let i = 0; i < carrito.length; i++) {
    console.table(carrito[i]);
    }

// for(let i = 0; i < carrito.length; i++ ){
//     console.log("articulo:" + carrito[i].nombre + "Precio: $ " +
//     carrito[i].precio);
//     }

//a) Mostrar els productes de més de 300€.

var masDeTrescientos = carrito.filter(function (element) {
    return element.precio >= 300;
    });
    console.table(masDeTrescientos);

//b) Mostrar el total a pagar del carrito. (hem de sumar tots els preus.)


var sum = carrito.reduce(function (total, element, index, array) {
    return total += element.precio;
}, 0);
console.log("El total del carrito es: " + sum);


//c) Obtenir nous carritos, tenint en compte les següents condicions:
    //a. Carrito con Productos con precio > 400

    let carrito1 = carrito.filter(producto => producto.precio > 400);

    //b. Carrito con Productos con el nombre ‘Celular'

    let carrito2 = carrito.filter(producto => producto.nombre === 'Celular');

    //c. Carrito con todos los excepto ‘Laptop

    let carrito3 = carrito.filter(producto => producto.nombre !== 'Laptop');

    console.table(carrito1);
    console.table(carrito2);
    console.table(carrito3);

//d) Comprova que en el carrito no hi hagi algun preu = 0

resultado = carrito.every(producto => producto.precio == 0);

console.log(resultado);