/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Este es un ejemplo de comentario en una linea 

// 2. Escribe un comentario en varias líneas

/*
    Este es un
    ejemplo de 
    comentarios es varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    let variableString = "Hola que tal"
    let numero = 12
    let numeroDecimal = 3.14
    let soyIngeniero = true
    let variableUndefined
    let variableNull = null
    let variableSymbol = Symbol("variableSymbol")
    let numeroGrande = BigInt(14548954321234875675465465)

// 4. Imprime por consola el valor de todas las variables

    console.log(variableString)
    console.log(numero)
    console.log(numeroDecimal)
    console.log(soyIngeniero)
    console.log(variableUndefined)
    console.log(variableNull)
    console.log(variableSymbol)
    console.log(numeroGrande)

// 5. Imprime por consola el tipo de todas las variables

    console.log(typeof variableString)
    console.log(typeof numero)
    console.log(typeof numeroDecimal)
    console.log(typeof soyIngeniero)
    console.log(typeof variableUndefined)
    console.log(typeof variableNull)
    console.log(typeof variableSymbol)
    console.log(typeof numeroGrande)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    variableString = "Hola que hay"
    numero = 20
    numeroDecimal = 9.8
    soyIngeniero = false
    variableUndefined
    variableNull = null
    variableSymbol = Symbol("variable")
    numeroGrande = BigInt(1454895432125445645645642334875675465465)

    console.log(variableString)
    console.log(numero)
    console.log(numeroDecimal)
    console.log(soyIngeniero)
    console.log(variableUndefined)
    console.log(variableNull)
    console.log(variableSymbol)
    console.log(numeroGrande)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    variableString = 9.8
    numero = "hola"
    numeroDecimal = true
    soyIngeniero = 15
    variableUndefined = null
    variableNull = undefined
    variableSymbol = BigInt(1454895432125445645645642334875675465465)
    numeroGrande = Symbol("variable")

    console.log(variableString)
    console.log(numero)
    console.log(numeroDecimal)
    console.log(soyIngeniero)
    console.log(variableUndefined)
    console.log(variableNull)
    console.log(variableSymbol)
    console.log(numeroGrande)
    
    console.log(typeof variableString)
    console.log(typeof numero)
    console.log(typeof numeroDecimal)
    console.log(typeof soyIngeniero)
    console.log(typeof variableUndefined)
    console.log(typeof variableNull)
    console.log(typeof variableSymbol)
    console.log(typeof numeroGrande)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
    const variableString1 = 9.8
    const numero1 = "hola"
    const numeroDecimal1 = true
    const soyIngeniero1 = 15
    const variableUndefined1 = null
    const variableNull1 = undefined
    const ariableSymbol_1 = BigInt(1454895432125445645645642334875675465465)
    const numeroGrande1 = Symbol("variable")

    console.log(variableString1)
    console.log(numero1)
    console.log(numeroDecimal1)
    console.log(soyIngeniero1)
    console.log(variableUndefined1)
    console.log(variableNull1)
    console.log(variableSymbol_1)
    console.log(numeroGrande1)

// 9. A continuación, modifica los valores de las constantes

 variableString1 = 9.82
     numero1 = "hola1"
     numeroDecimal1 = false
     soyIngeniero1 = 1512
     variableUndefined1 = null
     variableNull1 = undefined
     ariableSymbol_1 = BigInt(14548954321321125445645645642334875675465465)
     numeroGrande1 = Symbol("variable")

    console.log(variableString1)
    console.log(numero1)
    console.log(numeroDecimal1)
    console.log(soyIngeniero1)
    console.log(variableUndefined1)
    console.log(variableNull1)
    console.log(variableSymbol_1)
    console.log(numeroGrande1)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

//Las constantes no se pueden modificar