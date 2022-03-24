

console.log("Crear una nueva Card con appendChild");

// //creamos el elementos
// const div1 = document.createElement("div1");

// const div2 = document.createElement("div2");

// const p1 = document.createElement("pe");

// const p2 = document.createElement("pe");

// const p3 = document.createElement("pe");

// //le ponemos contenido

// p1.textContent = "concierto"

// p2.textContent = "Concierto de Rock"

// p3.textContent = "$800 por persoona"

// const newCard = document.querySelector(".contenedor-cards");
// newCard.appendChild(div1);
// div1.appendChild(div2);


const parrafo1 = document.createElement("P");

parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria");
parrafo1.classList.add("concierto");

const parrafo2 = document.createElement("P");

parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$899 por persoona";
parrafo3.classList.add("precio");

const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

const card = document.createElement("div");
card.classList.add("card");

card.appendChild(imagen);

card.appendChild(info);

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);

console.log(parrafo1);
console.log(parrafo2);