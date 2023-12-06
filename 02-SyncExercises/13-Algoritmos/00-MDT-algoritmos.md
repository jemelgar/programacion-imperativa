# Algoritmos

## Ejercicio 1

Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra `fizz`, los múltiplos de 5 por
`buzz` y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra `fizzbuzz`. Visiten este sandbox
[CodeSandBox](https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js) para realizar
el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
utilicen la función `console.log` para mostrar datos en la misma.

#### Solución 

```javascript
function esMultiplo(num, divisor) {
  if (num % divisor == 0) return true;
  return false;
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    //pasamos el caso base para múltiplo de 3 y 5  = 15
    if (esMultiplo(i, 15)) console.log('fizzbuzz');
    else if (esMultiplo(i, 3)) console.log('fizz');
    else if (esMultiplo(i, 5)) console.log('buzz');
    else console.log(i);
  }
}

fizzBuzz();
```

## Ejercicio 2

Escriban una función que reciba dos parámetros: un `array` y un `índice`. La función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá `6`.

```javascript
let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
var index = 1;
```

Visiten este sandbox para escribir su código.
[CodeSandBox](https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js)

#### Solución

```javascript
let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

function showItemfromArray(arr, index) {
  console.log(arr[index]);
}
showItemfromArray(array, 1);
```

## Ejercicio 3

Escribir una función que, dado un número de `mes`, devuelva la `cantidad
de días` de ese mes —suponiendo que no es un año bisiesto—.
[CodeSandBox](https://codesandbox.io/s/dias-del-mes-jb0f2?file=/src/index.js)

#### Solución 1

```javascript
// usando el constructor Date
function daysInMonth(year, month) {
  //los meses van de 0 a 11 en JS
  const lastDay = new Date(year, month, 0).getDate();
  return lastDay;
}
console.log(daysInMonth(2024, 2));
```

#### Solución 2

```javascript
//Declarando los meses como cavernícola 😋
//Puse el nombre del mes en lugar  del número
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
```

## Ejercicio 4

Escribir una función de JavaScript que invierta un número. Por ejemplo,
si `x = 32443`, la salida debería ser `34423`.
[CodeSandBox](https://codesandbox.io/s/inverter-jfwm7?file=/src/index.js)

#### Solución

```javascript
function reverseNumber(num) {
  num = Number([...String(num)].reverse().join(''));
  console.log(num);
}
reverseNumber(123456);
```

## Ejercicio 5

Escribir una función que reciba una array y solo imprima los valores que
se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá `6,23,33,100`.

```javascript
let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
```

[CodeSandBox](https://codesandbox.io/s/impresora-repitientes-qtz0e?file=/src/index.js)

#### Solución 1

```javascript
let array2 = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
// Usando Maps y Sets
// Lleva un registro de cuantas veces se repite
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

console.log(getRepeatedItems(array2).join(','));
```

#### Solución 2

```javascript
// Usando objetos y arrays
function getRepeatedItems(arr) {
  const itemsInfo = {};
  const repeatedvalues = [];

  for (const item of arr) {
    itemsInfo[item] ? (itemsInfo[item] += 1) : (itemsInfo[item] = 1);
  }
  const iterableObject = Object.entries(itemsInfo);

  for (let i = 0; i < iterableObject.length; i++) {
    if (iterableObject[i][1] > 1) {
      repeatedvalues.push(iterableObject[i][0]);
    }
  }
  return repeatedvalues;
}
console.log(getRepeatedItems(array2));
```
