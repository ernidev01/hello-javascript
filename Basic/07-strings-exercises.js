/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

    let nombre = "Erick "
    let apellido = "Gonzalez"
    let nombreApellido = nombre + apellido
    console.log(nombreApellido)

// 2. Muestra la longitud de una cadena de texto

    console.log(nombreApellido.length)

// 3. Muestra el primer y último carácter de un string

    console.log(nombreApellido[0])
    console.log(nombreApellido[13])

// 4. Convierte a mayúsculas y minúsculas un string

    console.log(nombreApellido.toLowerCase())
    console.log(nombreApellido.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
    
    let mensaje = `hola mi nombre es 
    ${nombreApellido}
    es un gusto 
    conocerte`
    console.log(mensaje)

// 6. Interpola el valor de una variable en un string

    let edad = 28

    let nombreEdad = `hola mi nombre es 
    ${nombreApellido} 
    y 
    tengo ${edad}
    años`
    console.log(nombreEdad)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

    console.log(mensaje.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

    console.log(nombreApellido.includes("Erick"))

// 9. Comprueba si dos strings son iguales

    nombreApellido === nombreEdad ? console.log("son iguales"):console.log("son diferentes")

// 10. Comprueba si dos strings tienen la misma longitud

    nombreApellido.length === nombreEdad.length ? console.log("los tamanios son iguales"):console.log("los tamanios son diferentes")
