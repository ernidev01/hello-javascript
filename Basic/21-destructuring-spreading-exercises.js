/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let myArray = [1, 2, 3, 4];
let [numero1, numero2, numero3, numero4, numero5] = myArray;
console.log(numero1);
console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);
console.log(numero5);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

myArray = [1, 2, 3, 4];
let [numero6 = 0, numero7 = 0, numero8 = 0, numero9 = 0, numero10 = 0] =
  myArray;
console.log(numero6);
console.log(numero7);
console.log(numero8);
console.log(numero9);
console.log(numero10);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
  name: "Brais",
  age: 37,
  alias: "MoureDev",
};

let { age: edad, name: nombre } = person;
console.log(edad);
console.log(nombre);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person3 = {
  name: "Brais",
  age: 37,
  alias: "MoureDev",
  walk: function () {
    console.log("La persona camina.");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.age} años de experiencia trabaja.`);
    },
  },
};

let {
  job: { name: nombreTrabajo, exp: experiencia },
} = person3;
console.log(nombreTrabajo);
console.log(experiencia);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let numeros = [10, 25, 7, 99, 42];
let nombres = ["Ana", "Carlos", "Luisa", "Pedro"];
let mixto = [1, "Hola", true, null, 3.14];

let nuevoArray = [...numeros, ...nombres, ...mixto];
console.log(nuevoArray);

// 7. Usa propagación para crear una copia de un array

let copiaArray = { ...nuevoArray };
console.log(copiaArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  encender: function () {
    console.log("El carro está encendido");
  },
};

let persona = {
  nombre: "Erick",
  edad: 25,
  ciudad: "Bogotá",
  saludar() {
    console.log("Hola, mi nombre es " + this.nombre);
  },
};

let objetoCombinado = { ...carro, ...persona };
console.log(objetoCombinado);

// 9. Usa propagación para crear una copia de un objeto

let objetoCopia = { ...objetoCombinado };
console.log(objetoCopia);


