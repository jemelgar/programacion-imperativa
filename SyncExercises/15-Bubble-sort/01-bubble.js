const edades = [33, 27, 34, 30, 34, 25];
const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L'];
const arrayCuentas = [
  {
    titular: 'Arlene Barr',
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: 'sueldo',
  },
  {
    titular: 'Roslyn Torres',
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: 'sueldo',
  },
  {
    titular: 'Cleo Lopez',
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: 'corriente',
  },
  {
    titular: 'Daniel Malone',
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: 'sueldo',
  },
  {
    titular: 'Ethel Leon',
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: 'sueldo',
  },
  {
    titular: 'Harding Mitchell',
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: 'corriente',
  },
];

console.log(bubbleSortAsc(edades));
console.log(bubbleSortDesc(edades));
//Ordenar Strings
console.log(bubbleSortAsc(letras));
console.log(bubbleSortDesc(letras));
// Ordenar objetos por propiedad
console.log(bubbleSortAsc(arrayCuentas, 'saldo'));
console.log(bubbleSortAsc(arrayCuentas, 'edadTitular'));

function bubbleSortAsc(arr, property) {
  const n = arr.length;
  let compare;
  // preparamos para recibir una propiedad para ordenar objetos
  if (property) {
    compare = (a, b) => a[property] < b[property];
  } else {
    compare = (a, b) => a < b;
  }

  for (let i = 0; i < n - 1; i++) {
    // hacemos arr.length -i -1 para que los valores que ya puso al final
    //No sean verificados en el resto de las iteraciones (optimizamos)
    for (let j = 0; j < n - i - 1; j++) {
      if (compare(arr[j + 1], arr[j])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(`Ordena ascendente ${property ? 'por ' + property : ''}`);
  return arr;
}

function bubbleSortDesc(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log('Ordena descendente');
  return arr;
}
