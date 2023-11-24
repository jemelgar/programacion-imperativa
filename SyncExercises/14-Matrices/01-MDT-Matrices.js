const matriz = [];
//Llenamos la matriz
createSquareMAtrix(10);
console.table(matriz);

/*-------SUMAS (HOISTING)---------- */
console.log('Suma todos los elementos');
console.log(sumAll(matriz));
console.log('Suma primera y última columna');
console.log(sumTwoCols(matriz, 0, 9));
console.log('Suma quinta y sexta fila');
console.log(sumTwoRows(matriz, 4, 5));
console.log('Suma de izquierda a derecha');
console.log(sumDiagonalLeft(matriz));
console.log('Suma de derecha a izquierda');
console.log(sumDiagonalRight(matriz));

/*--------------FUNCIONES-------------- */
//Suma todos los elementos

function sumAll(matrix) {
  let acc = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      acc += matrix[row][col];
    }
  }
  return acc;
}

// Llenar la matriz con valores del 1 al 100
function createSquareMAtrix(length) {
  for (let row = 0; row < length; row++) {
    //creamos una nueva fila con N=length espacios
    matriz[row] = new Array(length);
    for (let col = 0; col < length; col++) {
      matriz[row][col] = row * length + col + 1;
      //----Calculamos el valor de col dependiendo de row---
      //row*10 nos da el primer valor de cada fila (BASE)
      // Fila 0 empieza en 0, fila 1 en 10 fila 2 = 20...
      // col + 1 se suma a BASE: 0+1, 0+2...0+10
      //para pushear el valor de cada columna en una fila
    }
  }
}

//a) crear una función que nos retorne la sumatoria de la primer y última columna (sumar la primera Y y la última)

function sumTwoCols(matrix, col1, col2) {
  let acc = 0;
  for (let row = 0; row < matrix.length; row++) {
    acc += matrix[row][col1] + matrix[row][col2];
  }
  return acc;
}
console.log(sumTwoCols(matriz, 0, 4));

// b) crear una función que nos retorne la sumatoria de la quinta y sexta fila (la suma de ambas)
function sumTwoRows(matrix, row1, row2) {
  let acc = 0;
  for (let col = 0; col < matrix[row1].length; col++) {
    acc += matrix[row1][col] + matrix[row2][col];
  }
  return acc;
}
console.log(sumTwoCols(matriz, 4, 5));

function sumDiagonalLeft(matrix) {
  // [0][0]+[1][1]+[2][2]+[3][3]...[9][9]
  // fila y columna son iguales
  let acc = 0;
  const sumados = [];
  for (let i = 0; i < matrix.length; i++) {
    sumados.push(matrix[i][i]); //para mostrar los nums sumados
    acc += matrix[i][i];
  }
  return { sumatoria: acc, sumados };
}

function sumDiagonalRight(matrix) {
  // [0][9]+[1][8]+[2][7]...[9][0]
  //row incrementa 1 del 0 al 9
  //col = arr.length - row -1)
  let acc = 0;
  const sumados = [];
  for (let i = 0; i < matrix.length; i++) {
    sumados.push(matrix[i][matrix.length - i - 1]); //para mostrar los nums sumados
    acc += matrix[i][matrix.length - i - 1];
    //   console.log(matriz[i][matriz.length -(i+1)])
  }
  return { sumatoria: acc, sumados };
}
