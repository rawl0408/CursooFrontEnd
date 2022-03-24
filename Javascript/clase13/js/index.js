function buy(id) {

    cartList.push(products.find((pepito) => pepito.id == id ))

}

function showCartList() {

    console.table(cartList);
    
}

function cleanCart() {

    cartList.length = 0;
    subtotal.grocery.value = 0;
    subtotal.clothes.value = 0;
    subtotal.beauty.value = 0;
    subtotal.gadget.value = 0;

}

function subTotal() {

    //var tipus = Object.entries.keys(subtotal);

    //forma ESTÁTICA

//     for (let i = 0; i < cartList.length; i++) {

//         if (cartList[i].type == "clothes") {
//             subtotal.clothes.value += cartList[i].price;
//         }
        
//         if (cartList[i].type == "beauty") {
//             subtotal.beauty.value = cartList[i].price + subtotal.beauty.value;            
//         }
        
//         if (cartList[i].type == "grocery") {
//             subtotal.grocery.value += cartList[i].price;  
//         }

//         if (cartList[i].type == "gadget") {
//             subtotal.gadget.value += cartList[i].price;  
//         }
  
//     }
// }
    //forma DINÁMICA
    
    var tipus = Object.keys(subtotal);

    for (var i = 0; i < cartList.length; i++) {
        // El segon recorre tots els tipus
        tipus.forEach(element => {
            //Si el tipus del producte de la cistella, és la mateixa que la del tipus, aleshores sumem
            // OJO toFixed retorna string .. per aixo abans de tornar a sumar hem de passar a float.
            if (cartList[i].type == element) {
                var total2 = subtotal[element].value + cartList[i].price;
                subtotal[element].value = parseFloat(total2.toFixed(2));            
            }
        });
    }
} 
