// // const question = prompt('Ingresa la capital del Perú')
// // // console.log(question);


// // // Lima
// // // Lima
// // // LIMA 
// // // LiMa
// // // lIMA

// ----------------

// // Propiedad Length devuelve la cantidad de caracteres considerando los espacios

const fullName = 'Ricardo Velasquez';
console.log(fullName.length);

// // Método Trint hace lo mismo pero quitando los espacios del inicio y del final.

// // const fullName = '     Ricardo Velasquez    ';
console.log(fullName.trim().length);

// --------------------

// // CONCATENACION: se refiere a la mezcla de variables generalmente de tipo String

const name = 'Ricardo';
const lastName = 'Velasquez';

// // Concatenacion Manual (ES5) 
console.log('Bienvenido' + ' ' + name + ' ' + lastName + ' al bootcamp');

// // Template String(ES6)

console.log(`Bienvenido ${name} ${lastName} al bootcamp`);

// ----------------------


// NUMEROS

const numero1 = 20;
const numero2 = -50;
const numero3 = 20.50;
const numero4 = 0.5;
let value;

// // OPERACIONES ARITMETICAS EN JAVASCRIPT

// // SUMA
value = numero1 + numero2;

// // // RESTA
value = numero1 - numero2;

// // // MULTIPLICACION
value = numero1 + numero4;

// // // DIVISION
value = numero1 / numero4;

// // // MODULO nos arroja el residuo
value = 20 % 3;

console.log(value);

// // INCREMENTALES

value = 100;

value++;
value--;
value += 50;
value -= 25;

console.log(value);

// // OPERADORES

// Operador mayor a y Operador menor a; imprime en la consola el resultado como
// verdadero o falso, de acuerdo a los valores que le demos a nuestras variables

const number1 = 75;
const number2 = 98;
const number3 = '75';


// la consola arroja false
console.log(number1 > number2);

// la consola arroja true
console.log(number1 < number2);

// Comparacion al ser Javascript dinamicamente tipado solo esta comparando el valor
// y arroja que los datos son iguales, pero como el tipo de dato es 'string' la forma de
// solucionarlo es dandole === la triple comparacion

console.log(number1 === number3);

// ESTRUCTURAS DE CONTROL:

// Condicionales

const amount = 2500;
const debt = 2000;

if (amount >=debt) {
    console.log('Puedes pagar la deuda');
} else {
    console.log('No puedes pagar la deuda');    
}

// // Operador ternario

// condicion ? true : false
value ? console.log('Es correcto') : console.log('Es falso');


// También existen las condicionales anidadas que nos pemrite establecer multiples
// condiciones para obtener el resultado

const myMoney = 5000;
const laptopPrice = 6000;
const creditCard = false;
const loan = false;



if (laptopPrice >= myMoney) {
    console.log('No puedes comprar la laptop');
} else if (creditCard) {
    console.log('Puedes comprarla con tarjeta de credito');
} else if (loan) {
    console.log('Puedes comprarla con prestamo');
}


const payMethod = 'creditCard';

switch (payMethod) {
    case 'creditCard': {
     console.log('Se pagara con tarjeta de credito');
     break;
    }

    case 'loan': {
     console.log('Se pagara con prestamo');
     break;
    }

    default:
     console.log('No se puede pagar');
     break;
}