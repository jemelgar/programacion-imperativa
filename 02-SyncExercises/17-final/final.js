//Examen final

// 1. Dado el siguiente array de países

let paises = [
  {
    nombre: 'Argentina',
    continente: 'Sudamérica',
    poblacion: 40000000,
  },
  {
    nombre: 'Colombia',
    continente: 'Sudamérica',
    poblacion: 50372000,
  },

  {
    nombre: 'Brasil',
    continente: 'Sudamérica',
    poblacion: 300000000,
  },
  {
    nombre: 'Etiopía',
    continente: 'África',
    poblacion: 15000000,
  },
  {
    nombre: 'Chile',
    continente: 'Sudamérica',
    poblacion: 10000000,
  },
];

// Crear una función que reciba como parámetro el arreglo de objetos, un continente y un número de población. La misma debe La misma debe retornar un nuevo arreglo solo con los países que sean del continente pasado por parámetro, y además, que su población sea mayor o igual a la del parámetro. Si no encuentra coincidencias deberá retornar un array vacío.

function filterCountry(countries, continent, population) {
  // validamos que pasen un array cuyos elementos sean objetos
  

  filteredCountries = countries.filter((country) => {
    return country.continente === continent && country.poblacion >= population;
  });
  return filteredCountries;
}
console.log(filterCountry(paises, 'Sudamérica', 15000000));

// 2. Dado el siguiente array de números:

let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

// Crear una función llamada bubbleSort que reciba como parámetros el array y un string que represente el sentido de ordenamiento, la función deberá realizar un ordenamiento interno del array según el orden indicado “ASC” lo ordenará ascendente “DESC” lo ordenará descendente. Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función.

const bubbleSort = (numbers, order) => {
  //validamos que pasen un array de números y que todo los elementos sean números
  if (numbers === undefined || numbers.length === 0) {
    return 'Favor de ingresar un array de números';
  }
  if (!numbers.every((number) => typeof number === 'number')) {
    return 'Favor de ingresar un array de números';
  }

  const n = numbers.length;
  let compare;
  // preparamos para recibir una propiedad para ordenar objetos
  if (order === 'ASC') {
    compare = (a, b) => a < b;
  } else if (order === 'DESC') {
    compare = (a, b) => a > b;
  } else {
    return 'para ordenar ingresa: ASC o DESC';
  }

  for (let i = 0; i < n - 1; i++) {
    // hacemos arr.length -i -1 para que los valores que ya puso al final
    //No sean verificados en el resto de las iteraciones (optimizamos)
    for (let j = 0; j < n - i - 1; j++) {
      if (compare(numbers[j + 1], numbers[j])) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  console.log(`Número ordenados ${order ? order : ''}`);
  return numbers;
};
console.log(bubbleSort(arrayDeNumeros, 'ASC'));
console.log(bubbleSort(arrayDeNumeros, 'DESC'));
console.log(bubbleSort(arrayDeNumeros));

// 3. Dada la matriz:

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

//a. Crear una función que reciba la matriz por parámetro, sume todos los valores de la fila 1 y retorne la suma.

function sumOneRow(matrix) {
  // validación de que se pase la matriz con datos
  if (matrix === undefined || matrix.length === 0) {
    return 'Favor de ingresar una matriz válida';
  }
  let sum = 0;
  for (let i = 0; i < matrix[1].length; i++) {
    sum += matrix[1][i];
  }
  return sum;
}
console.log(sumOneRow(matriz));
//b. Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz.

function returnEven(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return 'Favor de ingresar una matriz válida';
  }

  const evenNums = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] % 2 === 0 ? evenNums.push(matrix[i][j]) : '';
    }
  }
  return evenNums;
}
console.log(returnEven([]));
console.log(returnEven(matriz));
