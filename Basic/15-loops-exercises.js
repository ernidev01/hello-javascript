/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

let numeros = 1;
for (let i = 0; i < 20; i++) {
  console.log(`numero ${numeros}`);
  numeros++;
}

while (numeros < 20) {
  console.log(`numero ${numeros}`);
  numeros++;
}

numeros = 1;
do {
  console.log(`numero ${numeros}`);
  numeros++;
} while (numeros <= 20);

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let resultado = 0;
for (let i = 0; i <= 100; i++) {
  resultado += i;
}
console.log(`La suma de los numeros ${resultado}`);

let iterator = 0;
resultado = 0;
while (iterator <= 100) {
  resultado += iterator;
  iterator++;
}
console.log(`La suma de los numeros ${resultado}`);

iterator = 0;
resultado = 0;
do {
  resultado += iterator;
  iterator++;
} while (iterator <= 100);
console.log(`La suma de los numeros ${resultado}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`los numero pares hasta el 50 son:${i}`);
  }
}

iterator = 0;
while (iterator <= 50) {
  if (iterator % 2 == 0) {
    console.log(`los numero pares hasta el 50 son:${iterator}`);
  }
  iterator++;
}

iterator = 0;
do {
  if (iterator % 2 == 0) {
    console.log(`los numero pares hasta el 50 son:${iterator}`);
  }
  iterator++;
} while (iterator <= 50);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const personas = ["Juan", "María", "Carlos", "Ana", "Luis"];

for (let element of personas) {
  console.log(element);
}

for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
}

iterator = 0;
while (iterator < personas.length) {
  console.log(personas[iterator]);
  iterator++;
}

iterator = 0;
do {
  console.log(personas[iterator]);
  iterator++;
} while (iterator < personas.length);

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let numeroVocales = 0;
let cadena = "hola dvfgsdvasdas";
let vocales = ["a", "e", "i", "o", "u"];
for (const element of cadena) {
  for (const element2 of vocales) {
    if (element === element2) {
      numeroVocales++;
    }
  }
}
console.log(numeroVocales);

numeroVocales = 0;
for (let i = 0; i < cadena.length; i++) {
  if (vocales.includes(cadena[i])) {
    numeroVocales++;
  }
}
console.log(numeroVocales);

numeroVocales = 0;
iterator = 0;
while (iterator < cadena.length) {
  if (vocales.includes(cadena[iterator])) {
    numeroVocales++;
  }
  iterator++;
}
console.log(numeroVocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

resultado = 1;
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const element of arrayNumeros) {
  resultado *= element;
}
console.log(resultado);

resultado = 1;

for (let index = 0; index < arrayNumeros.length; index++) {
  resultado *= arrayNumeros[index];
}
console.log(resultado);

resultado = 1;
iterator = 0;
while (iterator < arrayNumeros.length) {
  resultado *= arrayNumeros[iterator];
  iterator++;
}
console.log(resultado);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

resultado = 1;
let tabla5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const element of tabla5) {
  resultado = element * 5;
  console.log(`${element} x 5 = ${resultado}`);
}

resultado = 1;
for (let index = 0; index < tabla5.length; index++) {
  resultado = tabla5[index] * 5;
  console.log(`${tabla5[index]} x 5 = ${resultado}`);
}

resultado = 1;
iterator = 0;
while (iterator < tabla5.length) {
  resultado = tabla5[iterator] * 5;
  console.log(`${tabla5[iterator]} x 5 = ${resultado}`);
  iterator++;
}

// 8. Usa un bucle para invertir una cadena de texto

cadena = "hola";
let cadenaAlreves = "";

for (const element of cadena) {
  cadenaAlreves = element + cadenaAlreves;
}
console.log(cadenaAlreves);

cadenaAlreves = "";
for (let index = 0; index < cadena.length; index++) {
  cadenaAlreves = cadena[index] + cadenaAlreves;
}
console.log(cadenaAlreves);

iterator = 0;
cadenaAlreves = "";
while (iterator < cadena.length) {
  cadenaAlreves = cadena[iterator] + cadenaAlreves;
  iterator++;
}
console.log(cadenaAlreves);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = 0;
resultado = 0;
let inicio = 0;
let ahora = 1;
for (let index = 0; index < 10; index++) {
  console.log(inicio);
  fibonacci = inicio + ahora;
  inicio = ahora;
  ahora = fibonacci;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

numeros = [
  1, 212, 121, 2131, 132132, 131321, 5, 1321, 2, 13, 12, 1, 2, 3, 1, 56, 2185,
  12, 2,
];
let arrayMayor10 = [];
for (const element of numeros) 
  {
  if (element >10 ){
    arrayMayor10.push(element)
  }
}
console.log(arrayMayor10)