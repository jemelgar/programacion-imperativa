const prompt = require("prompt-sync")({ sigint: true });
/*
1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.*/
/* -------------------USANDO FOR -------------------*/
const printNumbers = (startingNum) => {
    for (i = startingNum+1; i <= startingNum + 10; i++) {
        console.log(i)
    }

}
/* -------------------USANDO WHILE------------------- */
// const printNumbers = (startingNum) => {
//     let count = 1
//     while (count <= 10) {
//         console.log(startingNum+1 + count++)
//     }
// }

const startFrom = prompt('¿De qué número desea empezar? ') * 1
printNumbers(startFrom)
