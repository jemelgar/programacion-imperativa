
/*
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100*/
const sumAll = () => {
    let acc = 0
    for (let i = 0; i <= 100; i++) {
        acc += i
    }
    console.log(acc)
}
sumAll()