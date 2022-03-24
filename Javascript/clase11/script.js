//EJERCICIO 1

const producto1 = {
    id: 1,
    name: "Anillo zafiro",
    price: 20,
    type: "Joyeria"
    }

const producto2 = {
    id: 2,
    name: "Zapatillas Adidas",
    price: 90,
    type: "Calzado"
    }

const producto3 = {
    id: 3,
    name: "Teclado Gaming",
    price: 40,
    type: "Complementos"
    }

const producto4 = {
    id: 4,
    name: "Barra de sonido LG",
    price: 220,
    type: "Sonido"
    }





console.log("El nombre del producto 1 es: " + producto1.name);
console.log("El type del producto 2 es: " + producto2.type);
console.log("El precio del producto 3 es: " + producto3.price);
console.log("El id del producto 4 es: " + producto4.id);

//EJERCICIO 2

const subTotal = {
    Sonido: {
        value: 50,
        quantity: 25,
        discount: 10,
        },
    Joyeria: {
        value: 50,
        quantity: 25,
        discount: 10,
        },
    Complementos: {
        value: 50,
        quantity: 25,
        discount: 10,
         },
    Calzado: {
        value: 50,
        quantity: 25,
        discount: 10,
        }
    }


console.log("El value es: " + subTotal.Sonido.value);
console.log("La cantidad que hay es: " + subTotal.Joyeria.quantity);
console.log("Descuento aplicado: " + subTotal.Complementos.discount);
console.log("Descuento aplicado: " + subTotal.Calzado.discount);


//EJERCICIO 3

const carList = [{
    id: 01,
    name: "Anillo Zafiro",
    price: 20,
    quantity: 1,
    subtotal: 25,
    subtotalWithDiscount: 22,
    type: 01,
    },{
        id: 02,
        name: "Teclado Gaming",
        price: 80,
        quantity: 2,
        subtotal: 85,
        subtotalWithDiscount: 83,
        type: 02,
    }]

console.log("El nombre de cartList 1 es: " + carList[0].name);
console.log("El precio de cartList 2 es: " + carList[1].price);