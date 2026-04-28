/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

    let nombre ="Erick"
    if("Erick" === nombre){
        console.log(`Mi nombre es ${nombre}`)
    }
    else{
        console.log("Asigna tu nombre")
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

    let usuario = "user1123"
    let contrasenia = "contrasenia132"

    
    let usuario2 = "user1123"
    let contrasenia2 = "contrasenia132"

    if(usuario === usuario2 && contrasenia === contrasenia2){
        console.log("Bienvenido usuario y contraseña correctos")
    }
    else{
        console.log("las credenciales son incorrectas")
    }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

    let numero = 132
    if(numero > 0){
        console.log("El numero es positivo")
    }
    else if(numero < 0){
        console.log("El numero es negativo")
    }
    else {
        console.log("El numero es 0")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    let edad = 18
    if( edad >= 18){
        console.log("Felicitaciones ya puedes votar")
    }
    else{
        console.log(`Lo siento todavía no pudes votar
            tienes ${edad} años
            Te faltan ${18 - edad} anios`)
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    edad >= 18 ? console.log("Adulto") : console.log ("Menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

    let mes = 2

    if (mes === 3 || mes === 4 || mes === 5){
        console.log("esta es la estación de Primavera")
    }
    else if(mes === 6 || mes === 7 || mes === 8){
        console.log("esta es la estación de Verano")
    }
    else if(mes === 9 || mes === 10 || mes === 11){
        console.log("esta es la estación de Otoño")
    }
    else{
        console.log("esta es la estación de Invierno")
    }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

    
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
        console.log("la cantidad de días que tiene es de 31")
    }
    else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
        console.log("la cantidad de días que tiene es de 30")
    }
    else{
        console.log("la cantidad de días que tiene es de 28")
        
    }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

    let idioma = "portugues"
    switch(idioma){
        case "español":
            console.log("Hola")
            break
        case "ingles":
            console.log("Hello / Hi")
            break
        case "portugues":
            console.log("Olá")
            break
        default:
            console.log("Bonjour")
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

  switch (mes){
    case 3:
    case 4:
    case 5:
        console.log("esta es la estación de Primavera");
        break;

    case 6:
    case 7:
    case 8:
        console.log("esta es la estación de Verano");
        break;

    case 9:
    case 10:
    case 11:
        console.log("esta es la estación de Otoño");
        break;

    default:
        console.log("esta es la estación de Invierno");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

    switch (mes){
        case 2:
        console.log("la cantidad de días que tiene es de 28")
            break
        case 4:
        case 6:
        case 9:
        case 11:
        console.log("la cantidad de días que tiene es de 30")
            break
        default:
            console.log("la cantidad de días que tiene es de 31")
    }