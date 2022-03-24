var elemento;

console.log("Eliminamos el (a) de Vender con remove()): ");

elemento = document.querySelector("a");
elemento.remove();

console.log(elemento);

var elemento2;

console.log("Eliminamos el (a) de Registro con removeChild()): ");

elemento2 = document.getElementsByClassName("navegacion");
elemento2[0].removeChild(elemento2[0].children[1]);

console.log(elemento2);