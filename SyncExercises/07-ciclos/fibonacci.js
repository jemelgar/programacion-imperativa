
/*
5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.
*/
/* -------------------USANDO WHILE------------------- */
const fibonacci = (limit) => {
    //Base, empezamos en 0 y 1
    let previous = 0
    let current = 1
    while (previous <= limit) {
        previous === 0 ? '' : console.log(previous)
        const temp = previous + current
        previous = current
        current = temp

    }

}
fibonacci(30)
/* -------------------USANDO FOR------------------- */
/*
const fibonacci = (limit) => {
    let previous = 0
    let current = 1
    for (let i = 0; i <= limit; i = previous + current) {
        previous != 0 ? console.log(previous) : ''
        const temp = previous + current
        previous = current
        current = temp
    }
}
*/

