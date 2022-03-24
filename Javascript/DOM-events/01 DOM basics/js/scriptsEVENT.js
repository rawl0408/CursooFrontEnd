//EJERCICIO 1

window.addEventListener('DOMContentLoaded', (event) => {
    alert('Todo cargado!');
    });

//EJERCICIO 2

const nav = document.getElementsByClassName('navegacion')[0];

nav.addEventListener("mouseenter", cambioFondo);

function cambioFondo(){
  //console.log("entrando a navegacion")
  nav.style.backgroundColor = "white";
}

nav.addEventListener("mouseout", () => {
  //console.log("saliendo de la navegacion");
  nav.style.backgroundColor = "transparent";
})

//EJRCICIO 3

const busqueda = document.querySelector(".busqueda");

//ejercicio a

busqueda.addEventListener("input", () => {
  alert("escribint...");
})

//ejercicio b

busqueda.addEventListener("input", e => {
  if (e.data == "a" ) {
    alert("has escrito -> a")
  }
})

// con javascript antiguo :

// busqueda.addEventListener("input", leerInput);

// function leerInput(eventoform) {
//   if (eventoform.target.value == "a"){
//     alert("has escrit a");
//   }
// }

//EJERCICIO 4

//obtenemos el item que queremos, en este caso el boton submit
var formulari = document.getElementById("btn-submit");

//asignamos esta variable formulari al evento que queremos y asignamos al click la funcion de abajo
formulari.addEventListener("click", validacio);

//esta funcion hace que el boton buscar no lleve a ningun lado
function validacio(buscar){
  buscar.preventDefault();
}

//EJERCICIO 5

