// Vamos a crear un juego para ver cómo funcionan los bucles y los condicionales

// Aún no hemos hablado de las funciones, pero las usaremos 
// para hacer este juego. 
// la palabra "function" es una palabra reservada, se usa cuando
// queremos crear una función, después de la palabra reservada,
// tenemos que ponerle un nombre a la función, en este caso "jugarAdivinaElNumero"

// Las funciones pueden tener parámetros (lo que va dentro de () ) 
// pero también pueden no tener, como en este caso. Después se colocan {}
// que es lo que limita el cuerpo de la función, todo lo que va dentro
// de las llaves, forma parte de la función

function jugarAdivinaElNumero() {

}

// Crearemos una variable llamada numero secreto, que será el resultado de generar un número random

// Math.random(): Esta función genera un número decimal aleatorio en el rango de 0 (inclusive) hasta 
//casi 1 (exclusivo), pero nunca exactamente 1. Por ejemplo, podría generar valores como 0.5, 0.234, o 0.99999, etc.

// Math.random() * 100: Al multiplicar el resultado de Math.random() por 100, se escalan los valores posibles al rango
// de 0 hasta casi 100. Por ejemplo, si Math.random() genera 0.5, al multiplicarlo por 100 obtenemos 50. Sin embargo, 
//todavía se incluyen valores decimales, por lo que podría ser algo como 49.9999.

// Math.floor(Math.random() * 100): Math.floor() es una función que redondea hacia abajo al entero más cercano. Al aplicar
// Math.floor() al resultado de Math.random() * 100, se elimina cualquier parte decimal del número, resultando en un entero 
// en el rango de 0 a 99. Por ejemplo, si el resultado anterior fue 49.9999, Math.floor() lo convierte en 49.

// Math.floor(Math.random() * 100) + 1: Finalmente, al añadir 1 al resultado, se ajusta el rango de los valores posibles de 0-99 a 1-100.
// Esto asegura que el número generado esté entre 1 y 100, ambos incluidos.

function jugarAdivinaElNumero() {

    let numeroSecreto = Math.floor(Math.random() * 100) + 1

}

// Crearemos también una variable a la que llamaremos numeroUser que guardará el número que indique el usuario
// También crearemos una variable en la que pondremos el máximo de intentos

function jugarAdivinaElNumero() {

    let numeroSecreto = Math.floor(Math.random() * 100) + 1
    let numeroUser
    let maxIntentos = 10

}

// Como hemos creado un máximo de intentos, haremos un bucle, que dure hasta maxIntentos


// La línea for (let intento = 1; intento <= maxIntentos; intento++) { es una instrucción de bucle for en JavaScript, 
//utilizada para repetir un bloque de código un número específico de veces. Esta línea específica se encarga de controlar 
//las iteraciones de un bucle que se ejecuta mientras se juega al "Adivina el número". Aquí desglosaremos cada parte de la 
//sentencia para entender mejor cómo funciona:

// let intento = 1;  Esta es la parte de inicialización del bucle for. Aquí, se declara una variable llamada intento y 
//se le asigna el valor inicial de 1. Esta variable actúa como contador para las iteraciones del bucle.

// intento <= maxIntentos;     Esta es la condición de continuación del bucle. Antes de cada iteración, se verifica esta condición. 
// El bucle continuará ejecutándose mientras la condición sea verdadera. En este caso, el bucle se ejecutará siempre que el valor de 
//intento sea menor o igual al valor de maxIntentos, que representa el número máximo de intentos permitidos para adivinar el número. 
//Si la condición es falsa, es decir, si intento supera a maxIntentos, el bucle se detendrá.

// intento++    Esta es la parte de incremento del bucle, que ocurre al final de cada iteración. El operador ++ es un incrementador que
// añade 1 al valor actual de intento. Esto significa que después de cada ciclo completo del bucle, intento se incrementa en 1, preparando
// la siguiente iteración hasta que la condición del bucle ya no se cumpla.

// {  Este es el comienzo del bloque de código que se repetirá en cada iteración del bucle. Todo lo que esté dentro de las llaves { ... } se 
//ejecutará repetidamente, según lo dictado por las partes anteriores de la sentencia for.

function jugarAdivinaElNumero() {

    let numeroSecreto = Math.floor(Math.random() * 100) + 1
    let numeroUser
    let maxIntentos = 10

    for (let intento = 1; intento <= maxIntentos; intento++) {

    }

}

// Ahora escribiremos, qué hará el programa cuando esté dentro del bucle for. Le asignaremos un valor a la variable numeroUser
// El valor de la variable, será el número que el usuario escriba con su teclado

// prompt("Introduce tu número:"): La función prompt() es una función incorporada en JavaScript que se utiliza para mostrar 
//un cuadro de diálogo con un mensaje opcional que solicita al usuario que ingrese algún texto. En este caso, el mensaje es 
// "Introduce tu número:". El cuadro de diálogo permite al usuario escribir un texto y al presionar "Aceptar", ese texto se devuelve 
//como resultado de la función prompt(). Si el usuario selecciona "Cancelar", la función devuelve null.


function jugarAdivinaElNumero() {

    let numeroSecreto = Math.floor(Math.random() * 100) + 1
    let numeroUser
    let maxIntentos = 10

    for (let intento = 1; intento <= maxIntentos; intento++) {

        let input = prompt("Adivina el número (1-100):");
        let adivinanza = parseInt(input);

    }

}

// 

function jugarAdivinaElNumero() {

    let numeroSecreto = Math.floor(Math.random() * 100) + 1
    let adivinanza = 0
    let maxIntentos = 10



    for (let intento = 1; intento <= maxIntentos; intento++) {

        let input = prompt("Adivina el número (1-100):")
        let adivinanza = parseInt(input);





        if (adivinanza === numeroSecreto) {
            alert(`Correcto has adivinado el número en ${intento} intentos`)
            return;
        } else if (adivinanza > numeroSecreto) {
            alert(`Tu número es demasiado alto. Llevas ${intento} intentos`)

        } else {
            alert(`Tu número es demasiado bajo. Llevas ${intento} intentos`)
        }

        if (intento === maxIntentos) {
            alert("Te has quedado sin intentos")
        }

        if (input === null) {
            alert("Juego cancelado.")
            return
        }

    }



}

jugarAdivinaElNumero()



