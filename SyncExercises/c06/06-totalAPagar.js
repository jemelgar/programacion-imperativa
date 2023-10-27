
const totalAPagar = (vehiculo, litrosConsumidos) => {
    const precio = (vehiculo === 'coche' && 86) || (vehiculo === 'moto' && 70) || (vehiculo === 'autobus' && 55) || console.log('Vehículo no válido')
    const taxes = ((litrosConsumidos >= 0 && litrosConsumidos <= 25) && 50) || (litrosConsumidos > 25 && 25) || console.log('Información de litros consumidos inválida')
    let total = (precio * litrosConsumidos + taxes) || 'Favor de verificar los datos ingresados'
    return total
}
const calcTotal = totalAPagar('moto', 75)
console.log(calcTotal)

