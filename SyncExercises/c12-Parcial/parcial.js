//Ejercicio 1
// Desarrollar una función para el siguiente apartado:
// Que reciba por parámetro 2 números, y verifique que si uno de ellos es par, retorne la multiplicación de ambos, si ambos son pares, retorne la suma de ambos, si no hay ninguno par, que retorne ‘ninguno es par ‘.

//Separé la  verificación de si el número es par, para mejorar la legibilidad
function isPair(num) {
  return num % 2 === 0;
}

function verificaPares(num1, num2) {
  //Validación básica de tipo de dato
  if (isNaN(num1) || isNaN(num2)) return 'Ingrese solo números';
  //Omito intencionalmente el uso de "else" para mejor legibilidad
  if (isPair(num1) && isPair(num2)) return num1 + num2;
  if (!isPair(num1) && !isPair(num2)) return 'Ninguno es par';
  return num1 * num2; //si los demás fallaron quiere decir que uno es impar
}

console.log(verificaPares(4, 1));
console.log(verificaPares(3, 1));
console.log(verificaPares(4, 8));

// Ejercicio 2
console.log('------Ejercicio 2-----------');
/*Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones : 
si edad es mayor o igual a 18 y tiene bici  “puede competir”
 si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
 si no tiene bici “No podrá competir” */

class Ciclista {
  constructor(nombre, apellido, edad, tieneBici) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.tieneBici = tieneBici;
  }
}
// Lo generé como instancias de clase para hacer varias pruebas más rápido
const ciclista1 = { ...new Ciclista('Enrique', 'Melgar', 35, false) };
const ciclista2 = { ...new Ciclista('Ana', 'Sánchez', 17, true) };
const ciclista3 = { ...new Ciclista('Iris', 'Martínez', 35, true) };

function puedeCompetir(ciclista) {
  const { edad, tieneBici } = ciclista;
  if (!tieneBici) return 'No podrá competir';
  if (edad < 18) return 'podrá competir pero con un adulto acompañante';
  return 'Puede competir';
}

console.log(puedeCompetir(ciclista1));
console.log(puedeCompetir(ciclista2));
console.log(puedeCompetir(ciclista3));

//Ejercicio 3:

let libros = [];

let historiasInconscientes = {
  anio: 2013,
  autor: 'Gabriel Rolón',
  paginas: 352,
};
let elAlquimista = {
  anio: 1988,
  autor: 'Paulo Coehlo',
  paginas: 192,
};
let elCampamento = {
  anio: 2021,
  autor: 'Blue Jeans',
  paginas: 480,
};
let operacionMasacre = {
  anio: 2009,
  autor: 'Rodolfo Walsh',
  paginas: 236,
};

/*
Deberás agregarlos al array utilizando un método de array.
Mostrar por consola el array para ver que contenga esos objetos.
Deberás crear una función que reciba el array libros como parámetro, y si el año de lanzamiento es anterior a 2020, deberá agregar una propiedad a cada objeto que se llame época y tenga el valor pre-pandemia, si el año es posterior o igual a 2020 el valor de la propiedad época será post-pandemia.
Ejecutar la función y mostrar por consola los cambios.

*/
console.log('------Ejercicio 3-----------');

libros.push(
  historiasInconscientes,
  elAlquimista,
  elCampamento,
  operacionMasacre,
);
console.log(libros);

function agregarEpoca(libros) {
  libros.forEach((libro) => {
    libro.epoca = libro.anio < 2020 ? 'pre-pandemia' : 'post-pandemia';
  });
}

agregarEpoca(libros);
console.log(libros);
