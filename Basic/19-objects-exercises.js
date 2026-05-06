/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let carro = {
  marca: "chevrolet",
  placa: "DSF132",
  ciudad: "Bogota",
};

// 2. Accede y muestra su valor

console.log(carro.ciudad);
console.log(carro.marca);
console.log(carro.placa);

// 3. Agrega una nueva propiedad

carro.modelo = 2025;
console.log(carro.modelo);
console.log(carro);

// 4. Elimina una de las 3 primeras propiedades

delete carro.placa;
console.log(carro);

// 5. Agrega una función e invócala

carro.freno = function () {
  console.log("El carro esta frenando");
};
console.log(carro);
carro.freno();

// 6. Itera las propiedades del objeto

for (const key in carro) {
  console.log(carro[key]);
}

// 7. Crea un objeto anidado

let moto = {
  marca: "susuki",
  placa: "PK132;L",
  modelo: 2018,
  aceite: {
    nombre: "castrol",
    tipo: "sintetico",
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(moto.aceite.nombre);
console.log(moto.aceite.tipo);

// 9. Comprueba si los dos objetos creados son iguales

if (carro == moto) {
  console.log("Los 2 objetos son iguales");
} else {
  console.log("Los 2 objetos son diferentes");
}

// 10. Comprueba si dos propiedades diferentes son iguales

if (carro.marca == moto.marca) {
  console.log("Las 2 propiedades  de los objetos son iguales");
} else {
  console.log("Las 2 propiedades  de los objetos son diferentes");
}
