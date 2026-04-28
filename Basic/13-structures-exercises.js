/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["perro", "gato", "elefante", "loro", "gusano"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final

animales.push("mosquito");
console.log(animales);
animales.unshift("pajaro");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros

let libros = new Set([
  "Cien años de soledad",
  "1984",
  "El principito",
  "Don Quijote de la Mancha",
  "Harry Potter y la piedra filosofal",
]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido

libros.add("El señor de los anillos", "Harry Potter y la piedra filosofal");
console.log(libros);

// 6. Elimina uno concreto a tu elección

libros.delete("1984");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre

let mes = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);
console.log(mes);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mes.has(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mes.set("verano", ["Julio", "Junio", "Agosto"]);
console.log(mes);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);
let numerosTransformados = new Set(numeros);
console.log(numerosTransformados);
let numerosMap = new Map ([["set de numeros",numerosTransformados]])
console.log(numerosMap)
