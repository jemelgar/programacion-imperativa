
  // podes continuar tu codigo a partir de aca!
const arrayCuentas = require('./data')

  const banco ={
    clientes: arrayCuentas,
    consultarClientes(titularCuenta){
        const clienteBuscado =this.clientes.find(cliente => cliente.titularCuenta === titularCuenta)
        return clienteBuscado ? clienteBuscado : (()=>{throw new Error('No se encontró ningún cliente con ese nombre')})();
    },
    deposito(titularCuenta, monto){
        const clienteBuscado = this.consultarClientes(titularCuenta)
        clienteBuscado.saldoEnPesos += monto
        return `Depósito realizado, su nuevo saldo es: ${clienteBuscado.saldoEnPesos}`
    },
    extraccion(titularCuenta, monto){
        const clienteBuscado = this.consultarClientes(titularCuenta)
        if(clienteBuscado.saldoEnPesos < monto){
            return 'Fondos insuficientes'
        }
        clienteBuscado.saldoEnPesos -= monto
        return `Extracción realizada correctamente, su nuevo saldo es: ${clienteBuscado.saldoEnPesos}`
    }

  }
  console.log(banco.consultarClientes('Jacki Shurmer'))
console.log(banco.deposito('Jacki Shurmer', 1000))


//-------------------PROPIEDAD ÚNICA-------------------
const propiedadUnica = (objeto, propiedad) => objeto.map(obj => obj[propiedad])
// console.log(propiedadUnica(arrayCuentas, 'titularCuenta'))
