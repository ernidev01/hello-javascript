/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
  return a + b;
}
console.log(suma(2, 3));

let sma = function (a, b) {
  return a + b;
};
console.log(suma(2, 3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numeros = [1, 3, 4, 5, 2, 13, 13, 456, 4, 21, 0, 13, 156, 4513, 13215, 46];
function numeroMayor(arrayNumeros) {
  let numero = 0;
  for (const element of arrayNumeros) {
    if (element >= numero) {
      numero = element;
    }
  }
  return `el numero mayos es ${numero}`;
}
console.log(numeroMayor(numeros));

let numeroMayo = 0;
numeros.forEach(function (value) {
  if (value >= numeroMayo) {
    numeroMayo = value;
  }
});
console.log(numeroMayo);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let vocales = ["a", "e", "i", "o", "u"];
let cadena = "hola  como estas";
let funcion = function (cadena, vocales) {
  let numeroVocales = 0;
  for (let i = 0; i <= cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      numeroVocales++;
    }
  }
  return `El numero de vocase son ${numeroVocales}`;
};
console.log(funcion(cadena, vocales));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let vocalesMayusculas = [];
vocales.forEach(function (value) {
  vocalesMayusculas.push(value.toUpperCase());
});
console.log(vocalesMayusculas);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
  let numeroPri = 0;
  for (let index = 0; index <= numero; index++) {
    if (numero % index === 0) {
      numeroPri++;
    }
  }
  if (numeroPri > 2) {
    return false;
  }
  return true;
}
console.log(esPrimo(10));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(arr1, arr2) {
  let comunes = [];

  for (let elemento of arr1) {
    if (arr2.includes(elemento)) {
      comunes.push(elemento);
    }
  }

  return comunes;
}

console.log(elementosComunes(vocales, vocales));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let arreglo = [
  1, 12, 12, 2, 13, 1231, 546, 132, 1385465, 5465, 432132, 4654, 56132, 156,
  456, 432, 132, 156, 456, 123, 156, 43, 113, 13156, 4, 132, 13, 5641, 313,
  2156, 41, 35132, 168, 4351, 2.135, 489, 4, 564, 1, 321, 564, 4,
];

let sum = 0;

arreglo.forEach(function (value) {
  if (value % 2 === 0) {
    sum += value;
  }
});
console.log(sum);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function arrayNumerosPotencia(array) {
  let numeroPotencia = [];
  for (let index = 0; index < array.length; index++) {
    numeroPotencia[index] = array[index] ** 2;
  }
  return numeroPotencia;
}
console.log(arrayNumerosPotencia(arreglo));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabras(texto) {
  return texto.split(" ").reverse().join(" ");
}

console.log(invertirPalabras("Hola mundo desde JavaScript"));

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
  if (n < 0) return "No existe factorial de negativos";
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(5));
