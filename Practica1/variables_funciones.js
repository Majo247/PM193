//A


let nombre = "Armando";
const edad = 25;
nombre = "Ana Maria";
const saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";

console.log(saludo);


//B

// function cuadrado(numero) {
//   return numero * numero;
// }

const cuadrado = (numero) => numero * numero;

console.log(cuadrado(2));  
console.log(cuadrado(5));  
console.log(cuadrado(10));


//C

const saludoPersonalizado = (nombre, edad) => `Hola, ${nombre}. Tienes ${edad} años.`;
console.log(saludoPersonalizado("Maria Jose", 24));