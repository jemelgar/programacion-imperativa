const prompt = require("prompt-sync")({ sigint: true });

function makeSandwich(base, bread, cheese, tomato, lettuce, onion, mayo, mustard) {
    /*-------Asignación de precios usando short circuiting */
    priceBase = (base === 'pollo' && 150) || (base === 'carne' && 200) || (base === 'veggie' && 100)
    priceBread = (bread === 'blanco' && 50) || (bread === 'negro' && 60) || (bread === 's/glutten' && 75)
    cheese = (cheese && 20) || 0
    tomato = (tomato && 15) || 0
    lettuce = (lettuce && 10) || 0
    onion = (onion && 15) || 0
    mayo = (mayo && 5) || 0
    mustard = (mustard && 5) || 0
    let total = priceBase + priceBread + cheese + tomato + lettuce + onion + mayo + mustard
    let order = `Esta es su orden: 
                un chanwich de: ${base}: $${priceBase}
                con pan ${bread}: $${priceBread}
                ${cheese ? 'con queso: ' + '$' + cheese : 'sin queso'}
                ${tomato ? 'con tomate: ' + '$' + tomato : 'sin tomate'}
                ${lettuce ? 'con lechuga: ' + '$' + lettuce : 'sin lechuga'}
                ${onion ? 'con cebolla: ' + '$' + onion : 'sin cebolla'}
                ${mayo ? 'con mayonesa: ' + '$' + mayo : 'sin mayonesa'}
                ${mustard ? 'con mostaza: ' + '$' + mustard : 'sin mostaza'}
                su total es: $${total}
                `
    return order
}

function orderSandwich() {

    const sandwichType = prompt('Ingrese el tipo de sandwich que deseas > pollo | carne | veggie: ').toLowerCase()
    const bread = prompt('Elija su pan > blanco | negro | s/glutten: ').toLowerCase()
    const cheese = prompt('¿Quiere queso? > si | no: ').toLowerCase() === 'si' ? true : false
    const tomato = prompt('¿Le echamos tomate? > si | no: ').toLowerCase() === 'si' ? true : false
    const lettuce = prompt('¿Le ponemos lechuga? > si | no: ').toLocaleLowerCase() === 'si' ? true : false
    const onion = prompt('¿Va a querer cebolla? > si | no: ').toLowerCase() === 'si' ? true : false
    const mayo = prompt('¿Le untamos mayonesa?(al pan) > si | no: ').toLowerCase() === 'si' ? true : false
    const mustard = prompt('¿Quiere mostaza? > si | no: ').toLowerCase() === 'si' ? true : false

    return makeSandwich(sandwichType, bread, cheese, tomato, lettuce, onion, mayo, mustard)

}
let newSandwich = orderSandwich()
console.log(newSandwich)