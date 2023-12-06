const prompt = require("prompt-sync")({ sigint: true });
const convertInch = inches => inches * 2.54
const buildUrl = info => `http://${info.replace(' ', '-')}.com`
const emphasize = sentence => `¡${sentence}!`
const dogAge = humanYears => humanYears * 7
const hourlyWage = salary => salary / 40
const calculadorIMC = (height, weight) => weight / (height ** 2)
const toUpperCase = sentence => sentence.toUpperCase()
const checkType = data => typeof (data)  //con prompt-sync siempre va a dar string
const calcCircumference = radius => (radius * 2) * Math.PI
const options = {
    1: 'Convertir pulgadas a centímetros',
    2: 'Construir una URL',
    3: 'Agregar signos de admiración a una frase',
    4: 'Calcular años perro',
    5: 'Calcular salario por hora',
    6: 'Calcular Índice de Masa Corporal',
    7: 'Pasar una oración a Mayúsculas',
    8: 'Saber el tipo de dato de un valor',
    9: 'Calcular la circunferencia',
    10: 'Salir'
}
let option
let menu = () => {

    console.table(options)

    option = prompt('Seleccione el número de lo que desea hacer: ') * 1
    switch (option) {
        case 1: const inches = prompt('Ingrese el número de pulgadas: ')
            console.log(`${inches} pulgadas equivalen a ${convertInch(inches)} centímetros`)
            break;
        case 2: const info = prompt('Ingrese una frase para obtener tu URL: ')
            console.log(`Aquí está tu url: ${buildUrl(info)}`)
            break
        case 3: const sentence = prompt('Ingrese su frase: ')
            console.log(`Nueva frase: ${emphasize(sentence)}`)
            break
        case 4: const humanYears = prompt('Ingrese la edad de su perro en años humanos: ')
            console.log(`Esta es la edad en años perro: ${dogAge(humanYears)}`)
            break
        case 5: const salary = prompt('¿Cuánto gana al mes?')
            console.log(`Su salario por hora es: ${hourlyWage(salary)}`)
            break
        case 6: const height = prompt('Ingrese su altura en metros: ')
            const weight = prompt('Ingrese su peso en kilogramos: ')
            console.log(`Su IMC es: ${calculadorIMC(height, weight)}`)
            break
        case 7: const phrase = prompt('Ingrese la frase a transformar: ')
            console.log(`Frase en mayusculas: ${toUpperCase(phrase)}`)
            break
        case 8: const data = prompt('Ingrese algo para saber su tipo de dato: ')
            console.log(`El tipo de dato de ${data} es: ${checkType(data)}`)
            break
        case 9: const radius = prompt('Ingrese el radio del círculo: ')
            console.log(`La circunferencia es: ${calcCircumference(radius)}`)
            break
        default: console.log('Bye')
    }
    const continuar = prompt('¿Probar otra función?: Si/No : ').toLowerCase()
    continuar == 'si' ? menu() : ''
}
menu()

