// -------------Ejercicio 1-------------
function esMultiplo(num, divisor) {
  if (num % divisor == 0) return true;
  return false;
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (esMultiplo(i, 15)) console.log('fizzbuzz');
    else if (esMultiplo(i, 3)) console.log('fizz');
    else if (esMultiplo(i, 5)) console.log('buzz');
    else console.log(i);
  }
}

fizzBuzz();

// -------------Ejercicio 2-------------

let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

function showItemfromArray(arr, index) {
  console.log(arr[index]);
}
showItemfromArray(array, 1);

// -------------Ejercicio 3-------------

// usando el constructor Date
function daysInMonth(year, month) {
  //los meses van de 0 a 11 en JS
  const lastDay = new Date(year, month, 0).getDate();
  return lastDay;
}
console.log(daysInMonth(2024, 2));

//Declarando los meses como cavernícola 😋
const months = new Map();
months.set('Enero', 31);
months.set('Febrero', 28);
months.set('Marzo', 31);
months.set('Abril', 30);
months.set('Mayo', 31);
months.set('Junio', 30);
months.set('Julio', 31);
months.set('Agosto', 31);
months.set('Septiembre', 30);
months.set('Octubre', 31);
months.set('Noviembre', 30);
months.set('Diciembre', 31);

function getDaysInMonth(month) {
  months.has(month)
    ? console.log(months.get(month))
    : console.log(`el mes ${month} no existe`);
}
getDaysInMonth('Diciembre');
getDaysInMonth('SMARCH');

// Ejercicio 4

function reverseNumber(num) {
  num = Number([...String(num)].reverse().join(''));
  console.log(num);
}
reverseNumber(123456);

// -------------Ejercicio 5-------------

// Usando Maps y Sets
function getRepeatedItems(arr) {
  const countMap = new Map();
  const repeatedValues = new Set();

  arr.forEach((item) => {
    countMap.set(item, (countMap.get(item) || 0) + 1);
    /// === 2 y no >1 para que no intente agregarlo cada vez que se repita
    if (countMap.get(item) === 2) {
      repeatedValues.add(item);
    }
  });

  return Array.from(repeatedValues);
}
console.log(getRepeatedItems(array).join(','));

// Usando objetos y arrays
// function getRepeatedItems(arr) {
//   const itemsInfo = {};
//   const repeatedvalues = [];

//   for (const item of arr) {
//     itemsInfo[item] ? (itemsInfo[item] += 1) : (itemsInfo[item] = 1);
//   }
//   const iterableObject = Object.entries(itemsInfo);

//   for (let i = 0; i < iterableObject.length; i++) {
//     if (iterableObject[i][1] > 1) {
//       repeatedvalues.push(iterableObject[i][0]);
//     }
//   }
//   return repeatedvalues;
// }
// console.log(getRepeatedItems(array));
