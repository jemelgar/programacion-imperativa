const accessBar = (age) => {
    const oddAge = (age % 2) ? '\n¿Sabías que tu edad es impar?' : ''
    const twentyOne = age === 21 ? '\nFelicidades por llegar a la mayoría de edad' : ''
    if (age < 0) return 'Error, edad inválida. Por favor ingrese un número válido'
    else if (age < 18) return `No puede pasar al bar.${oddAge}`
    else if (age < 21) return `Puede pasar al bar, pero no puede tomar alchohol${oddAge}`
    else if (age >= 21) return `Puede pasar al bar y tomar alcohol${twentyOne}${oddAge}`
}
const enterBar = accessBar(21)
console.log(enterBar)
