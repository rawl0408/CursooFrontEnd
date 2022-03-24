//EJERCICIO 1

let numero = 10;

for (let i = 10; i <= numero; i++) {
    if (i % 2 == 0) {
        console.log("El numero " + i + " es PAR");
    } else {
        console.log("El numero " + i + " es IMPAR");
    }
    
}

//EJERCICIO 2
document.write("Ejercicio 2 <br>")

let numeroEscrito = 5;

for (let j = 0; j < numeroEscrito; j++) {
    for (let x = 0; x < numeroEscrito; x++) {
        document.write("*") 
    }
    document.write("<br>"); 
}

document.write("<br>")

//EJERCICIO 3

document.write("Ejercicio 3 <br>")

let columnas = 5;
let filas = 3;

for (let j = 0; j < filas; j++) {
    for (let x = 0; x < columnas; x++) {
        document.write("*") 
    }
    document.write("<br>"); 
}
document.write("<br>")

//EJERCICIO 4

document.write("Ejercicio 4 <br>")

let multiplicador = 5;

for (let i = 0; i <= 10; i++) {
    document.write("<br>" + multiplicador + (" x ") + i + " = " + (multiplicador*i))
}

document.write("<br>")
document.write("<br>")

//EJERCICIO 5

document.write("Ejercicio 5 <br>")

let frase = "hola como estas tu hoy";

        for (let f = 0; f < frase.length; f++) {
            if (frase.charAt(f) == ' ') {
                document.write('<br>');
            } else {
                document.write(frase.charAt(f));
            }
        }

        document.write("<br>")
        document.write("<br>")

//EJERCICIO 6

document.write("Ejercicio 6 <br>")
document.write("<br>")
document.write("<br>")


//EJERCICIO 7

document.write("Ejercicio 7 <br>")

let frase1 = "Ahora hola que tal"
let lletra1 = "a";
let contador = 0;

        for (let f = 0; f < frase1.length; f++) {
            if (frase1.charAt(f).toLowerCase() == lletra1.toLowerCase()) {    
          
                contador += 1;
                //contador = contador +1; {ESTO ES LO MISMO QUE CONTADOR += 1;}
            } 
        }

        document.write("FRASE: (" + frase1 + ") <br>")
        document.write("La letra (" + lletra1 + ") ha salido " + contador + " veces");

//EJERCICIO 8

document.write("Ejercicio 6 <br>")
document.write("<br>")
document.write("<br>")

