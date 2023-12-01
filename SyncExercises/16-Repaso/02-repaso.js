/* PRE - EXAMEN FINAL */

//EJERCICIO Nº1

//Dada la matriz
//3x3

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

/* 
  1) Crear una función que reciba la matriz por parámetro, sume todos los valores de primer diagonal  y retorne la suma.
  */

function sumDiagonalLeft(matrix) {
  let acc = 0;
  const sumados = [];
  for (let i = 0; i < matrix.length; i++) {
    sumados.push(matrix[i][i]); //para mostrar los nums sumados
    acc += matrix[i][i];
  }
  return { sumatoria: acc, sumados };
}
console.log(sumDiagonalLeft(matriz));

/*
  2) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */

function returnEven(matrix) {
  const evenNums = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] % 2 === 0 ? evenNums.push(matrix[i][j]) : '';
    }
  }
  return evenNums;
}
console.log(returnEven(matriz));

/* ---------------------------------------------------------- */

//EJERCICIO Nº2

//Dado el siguiente arreglo de objetos:

let cuadros = [
  {
    nombre: 'Mona Lisa',
    creador: 'Leonardo Da Vinci',
  },
  {
    nombre: 'La ultima cena',
    creador: 'Leonardo Da Vinci',
  },
  {
    nombre: 'La noche estrellada',
    creador: 'Vincent van Gogh',
  },
  {
    nombre: 'El grito',
    creador: 'Edvard Munch',
  },
  {
    nombre: 'Trigal con cuervos',
    creador: 'Vincent van Gogh',
  },
  {
    nombre: 'Maria Magdalena',
    creador: 'Leonardo Da Vinci',
  },
  {
    nombre: 'Amor y Dolor',
    creador: 'Edvard Munch',
  },
  {
    nombre: 'Ansiedad',
    creador: 'Edvard Munch',
  },
];
/* 
    1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista. Nuestra función deberá retornar un nuevo array que contenga los nombres de las obras de arte que ha realizado el creador recibido por parámetro. Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
    
    Nuestra función deberá retornar: 
    
    ("Mona Lisa", "La ultima cena", "Maria Magdalena")
  
    */
function filtrarPorCreador(cuadros, artista) {
  const filteredArr = cuadros.filter((cuadro) => cuadro.creador === artista);
  return filteredArr;
}
console.log(filtrarPorCreador(cuadros, 'Leonardo Da Vinci'));
/* ---------------------------------------------------------- */

/* 
  //EJERCICIO Nº3
  
  Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:
  
  1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente según su creador o no. 
  2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  
  3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  
  */
function bubbleSortAsc(arr, property) {
  const n = arr.length;
  let compare;
  let sorted = true; // bandera para ver si el arr ya está ordenado

  if (property) {
    compare = (a, b) => a[property] < b[property];
  } else {
    compare = (a, b) => a < b;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (compare(arr[j + 1], arr[j])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
    }

    if (sorted) return true;
  }

  console.log(`Ordena ascendente ${property ? 'por ' + property : ''}`);
  return arr;
}

console.log(bubbleSortAsc(cuadros, 'creador'));
// probamos el arreglo ya ordenado (como ya se ejecutó el array cuadros está ordenado después de esta línea)
console.log(bubbleSortAsc(cuadros, 'creador'));
/* ---------------------------------------------------------- */

/* 
  //EJERCICIO Nº4
  
  Desarrollar una función para cada uno de las siguientes apartados: 
  
  1) Que reciba por parámetro un número entero y retorne su triple.
  2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
  3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 
  
  */

/* ---------------------------------------------------------- */
const triple = (num) => num ** 3;
console.log(triple(4));
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(3, 4));
const divide = (num1, num2) => {
  if (num1 !== 0 && num2 !== 0) {
    return num1 / num2;
  }
  return 'No puedes enviar cero';
};
console.log(divide(8, 9));
console.log(divide(0, 9));
/* 
  //EJERCICIO Nº5
  
  Crear una matriz de 5 x 7.
  Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
   */

/* ---------------------------------------------------------- */
const matriz2 = createMatrix(5, 7);
// console.table(matriz2);
function sumRow(matrix) {
  let suma = 0;
  for (let i = 0; i < matrix[3].length; i++) {
    suma += matrix[3][i];
  }
  return suma;
}
console.log(sumRow(matriz2));

function createMatrix(filas, columnas) {
  const matriz = [];
  for (let row = 0; row < filas; row++) {
    matriz[row] = new Array(columnas);
    for (let col = 0; col < columnas; col++) {
      matriz[row][col] = row * columnas + col + 1;
    }
  }
  return matriz; // Devolvemos la matriz creada
}
//EJERCICIO Nº6

//Dado el siguiente arreglo de objetos:

let personas = [
  {
    nombre: 'Lucia',
    oficio: 'Medica',
    edad: 37,
  },
  {
    nombre: 'Tiziano',
    oficio: 'Programador',
    edad: 9,
  },
  {
    nombre: 'Julian',
    oficio: 'Chofer',
    edad: 45,
  },
  {
    nombre: 'Adriana',
    oficio: 'Chef',
    edad: 24,
  },
];

/* 
  
  1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.
  2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento. 
  */
function filterPersonas(arr) {
  const filteredArr = arr.filter((persona) => persona.edad > 25);
  return filteredArr;
}
console.log(filterPersonas(personas));
