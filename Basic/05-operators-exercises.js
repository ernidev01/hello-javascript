/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/
    let a = 15
// 1. Crea una variable para cada operación aritmética
    let suma = 1 + 5
    let resta = 15 - 12
    let multiplicacion = 45 * 13
    let division = 132 /45 

    let resto = 25 % 5
    let potencia = 3 ** 9

    let decremento = a-- 
    let incremento = a++

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    let sumaAsignacion = 15
    sumaAsignacion += suma
    
    let restaAsignacion = 13
    restaAsignacion -= resta

    let multiplicacionAsignacion = 132
    multiplicacionAsignacion *= multiplicacion

    let divisionAsignacion = 20
    divisionAsignacion /= division

    let restoAsignacion = 30
    restoAsignacion  %= resto

    let potenciaAsignacion = 3
    potenciaAsignacion **= potencia

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

    console.log(21<52)
    console.log(132>12)
    console.log(15 ===15)
    console.log(false === 15 <2)
    console.log(25 <= 100)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    console.log(500<52)
    console.log(132>1321)
    console.log(15 ==="hola")
    console.log(false === 2 == 5)
    console.log(25 <= 10)

// 5. Utiliza el operador lógico and

    console.log(suma > multiplicacion && 321 == "hola")

// 6. Utiliza el operador lógico or

    console.log(resta > division || 321 == "hola")

// 7. Combina ambos operadores lógicos

    console.log((resta > division || 321 == "hola") && (suma > multiplicacion && 321 == "hola"))

// 8. Añade alguna negación

    console.log(!true)

// 9. Utiliza el operador ternario

    const soyProfesional = true
    soyProfesional ? console.log("soy profesional") : console.log("no soy profesional")

// 10. Combina operadores aritméticos, de comparación y lógicas

    let b = 13

    a == b ? console.log( "a y b son iguales") : console.log("a y b no son iguales")
    a != b ? console.log( "a y b son iguales") : console.log("a y b no son iguales")