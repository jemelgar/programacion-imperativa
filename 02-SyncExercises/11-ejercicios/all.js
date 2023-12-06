/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/
function encontrarMultiplos(num, limit) {
  let multiplos = [];
  for (let i = 1; i < limit; i++) {
    if (i % num === 0) multiplos.push(i);
  }
  return multiplos;
}

//CODIGO

/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
// Crear arreglo de objetos estudiantes
const clase = [
  {
    nombre: 'Juan',
    notas: [10, 10, 10],
    aprobado: null,
  },
  {
    nombre: 'Maria',
    notas: [5, 5, 10],
    aprobado: null,
  },
  {
    nombre: 'Pedro',
    notas: [10, 8, 6],
    aprobado: null,
  },
  {
    nombre: 'Ana',
    notas: [6, 6, 6],
    aprobado: null,
  },
];

// Función para calcular el promedio de notas
function calcAverage(clase) {
  let sum = 0;
  for (let i = 0; i < clase.notas.length; i++) {
    sum += clase.notas[i];
  }
  return sum / clase.notas.length;
}

// Función para determinar si el estudiante aprobó
function aprobado(clase) {
  for (const estudiante of clase) {
    if (calcAverage(estudiante) >= 7) {
      estudiante.aprobado = true;
    } else {
      estudiante.aprobado = false;
    }
  }
  return clase;
}

// Calcular si los estudiantes aprobaron o no
// console.log(aprobado(clase));
// Imprimir estado de aprobación de los estudiantes
// console.log(aprobado(clase));
/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let i = 0;
while (i < numeros.length) {
  if (numeros[i] % 2 === 0) {
    console.log((sum += numeros[i]));
  }
  i++;
}

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/
function productoImpares(numeros) {
  let producto = 1;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      producto *= numeros[i];
    }
  }
  return producto;
}
console.log(productoImpares(numeros));
/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

const vehiculo = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2010,
  precio: 10000,
  impuesto: function () {
    if (this.anio < 2010) {
      return this.precio * 0.1;
    } else {
      return this.precio * 0.05;
    }
  },
};
