const prompt = require("prompt-sync")({ sigint: true });
const secretNumber = () => {
    const secretNumber = Math.floor(Math.random() * 10) + 1
    const userGuess = prompt('Trata de adivinar el número secreto, está entre 1 y 10: ') * 1
    return secretNumber === userGuess ? 'Felicidades, adivinaste el número' : `Lo siento el número secreto era: ${secretNumber} y tu ingresaste: ${userGuess}`
}
// console.log(secretNumber())

const abrirParacaidas = (speed, height) => {
    if (speed < 1000 && height >= 2000 && height < 3000) return 'Puedes abrir el paracaídas'
    else return 'No puedes abrir el paracaídas'
}
const puedoAbrir = () => {
    const velocidad = prompt('¿Cuál es su velocidad en km/h? ')
    const altura = prompt('¿A qué altura está en metros? ')
    return abrirParacaidas(velocidad, altura)
}

// console.log((puedoAbrir()))

const translator = (word) => {
    switch (word) {
        case 'casa':
            return 'House'
        case 'perro':
            return 'Dog'
        case 'pelota':
            return 'Ball'
        case 'árbol':
            return 'tree'
        case 'genio':
            return 'Genius'
        default:
            return 'Mi conocimiento de ingés es limitado, no conozco esa palabra'
    }
}
// console.log(translator('perro'))

const movieReview = (review) => {
    review = review.toLowerCase()
    switch (review) {
        case 'muy mala':
            return `Calificaste la peli como ${review}. Que mal que no te gustó. Gracias por tu visita`
        case 'mala':
            return `Calificaste la peli como ${review}. Que mal que no te gustó. Gracias por tu visita`
        case 'mediocre':
            return `Calificaste la peli como ${review}. Que mal que no te gustó. Gracias por tu visita`
        case 'buena':
            return `Calificaste la peli como ${review}. Que bueno que te gustó. Gracias por tu visita`
        case 'muy buena':
            return `Calificaste la peli como ${review}. Que bueno te gustó. Gracias por tu visita`
        default:
            return 'Ingresaste un valor inválido'
    }
}
// console.log(movieReview('Muy mala'))