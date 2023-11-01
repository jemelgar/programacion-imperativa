
/*
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.*/
const factorial = (num) => {
    if (num === 0 || num === 1) return 1
    else {
        let acc = 1
        for (let i = 2; i <= num; i++) {
            acc = acc * i
        }
        return acc
    }
}
console.log(factorial(5))