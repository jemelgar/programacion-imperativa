const arrayCuentas = require('./cuentas.js');

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// Recorriendo el Array una sola vez (más performante, un poco más difícil de leer)
const sortAgesByCondition = (edades) => {
  const menoresEdad = [],
    mayoresEdad = [],
    edadEs18 = [];

  for (const edad of edades) {
    if (edad < 18) {
      menoresEdad.push(edad);
      continue;
    }
    if (edad === 18) edadEs18.push(edad);
    mayoresEdad.push(edad);
  }
  return { menoresEdad, mayoresEdad, edadEs18 };
};

// console.log(sortAgesByCondition(edades))
// Recorriendo el array 1 vez por cada filtro (menos performante, más fácil de leer y de mantener)

// const menoresEdad= edades.filter(edad => edad < 18);
// const mayoresEdad= edades.filter(edad => edad >= 18);
// const igualEdad= edades.filter(edad => edad === 18);

const menorEdad = Math.min(...edades);
const mayorEdad = Math.max(...edades);
const promedioEdad = edades.reduce((a, b) => a + b) / edades.length;
const incrementarEdad = edades.map((edad) => edad + 1);

//--------------------EJERCICIO 2--------------------
/* ------------HELPING FUNCTIONS----------- */
const orderAccountsByBalance = () =>
  arrayCuentas.sort((a, b) => a.saldo - b.saldo);

const filterAccountsByStatus = (status) =>
  arrayCuentas.filter((account) => account.estaHabilitada === status);

const filterAccountsByCondition = (operator, age) => {
  if (operator === 'less') {
    return arrayCuentas.filter((cuenta) => cuenta.edadTitular < age);
  }
  if (operator === 'greaterEqual') {
    return arrayCuentas.filter((cuenta) => cuenta.edadTitular >= age);
  }
  if (operator === 'lessEqual')
    return arrayCuentas.filter((cuenta) => cuenta.edadTitular <= age);
  throw Error('Parámetros incorrectos');
};
/*----------------------------------------- */
// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
const acountsAboveAge = filterAccountsByCondition('less', 30);
// console.log(acountsAboveAge)

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
const accountsMinAge = filterAccountsByCondition('greaterEqual', 30);
// console.log(accountsMinAge)
// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
const accountsMaxAge = filterAccountsByCondition('lessEqual', 30);
// console.log(accountsMaxAge)

// Obtener la cuenta con el titular de la misma más joven.
const getAccountYoungestCustomer = () => {
  return arrayCuentas.sort((a, b) => a.edadTitular - b.edadTitular).shift();
};
// console.log(getAccountYoungestCustomer())
// Obtener un array con las cuentas habilitadas.
const enabledAccounts = filterAccountsByStatus(true);
// console.log(getEnabledAccounts(arrayCuentas))
// Obtener un array con las cuentas deshabilitadas.
const disabledAccounts = filterAccountsByStatus(false);

// Obtener la cuenta con el menor saldo.
const lowestBalanceAccount = orderAccountsByBalance().shift();
//  console.log(getLowestBalanceAccount())

// Obtener la cuenta con el mayor saldo.
const highestBalanceAccount = orderAccountsByBalance().pop();

//  console.log(getHighestBalanceAccount())

//----------EXTRAS---------------------
// Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico
function generarID(arr) {
  arr.forEach((cuenta, index) => {
    cuenta.id = index + 1;
  });
  return arr;
}
// console.log(generarID(arrayCuentas));

// Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null
function buscarPorId(arr, idCuenta) {
  const searchedAccount = generarID(arr).filter((cuenta) => {
    return cuenta.id === idCuenta;
  });
  return searchedAccount[0] || null;
}

// console.log(buscarPorId(arrayCuentas, 3));
// Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro
function filtrarPorSaldos(cuentas, saldo) {
  const searchedAccount = generarID(cuentas).filter(
    (cuenta) => cuenta.saldo <= saldo,
  );
  return searchedAccount.length ? searchedAccount : null;
}
// console.log(filtrarPorSaldos(arrayCuentas, 4000));

// Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined
// Reutilizando la función  buscarPorId

function incrementarSaldo(cuentas, id, saldo) {
  const sumToAccount = buscarPorId(cuentas, id);
  return sumToAccount ? (sumToAccount.saldo += saldo) : undefined;
}
console.log(incrementarSaldo(arrayCuentas, 3, 100));



saludar: (function () {
  
  //código
})();