// Función base: Valida que se pase un número y revisa si la suma es par o impar
function isEven(loopNum,addToLoop){
    if (isNaN(addToLoop))  throw new Error('Es necesario ingresar un número');
    console.log(`Iteración ${loopNum} `)
    // Retornamos 0 como status si el número es par, y el residuo si es impar
     return {status: ((loopNum+addToLoop)%2), suma:loopNum+addToLoop}  
}
// 1. Loop de pares
const loopDePares =addToLoop=>{
     for (let i=0;i<=100;i++){
        const {status,suma}= isEven(i,addToLoop) //destructuramos el objeto recibido
        console.log(`${status === 0 ? 'el número '+ suma +' es par': suma } \n--------------------`);
    }
}
// loopDePares('4')

// Loop de impares con palabra
const loopDeImpares =(num, word='')=>{
    for (let i=0;i<=100;i++){
        const {status,suma}= isEven(i,num,word)
        console.log(`${status === 0 ? suma : suma+' '+word } \n--------------------`);
    }
}
// loopDeImpares(5, 'fizz')

// Sumatoria (Usando recursión)
const sumatoria =(num)=>{
    if (isNaN(num) || num<0) throw new Error('Debes ingresar un número');
    if (num===0) return 0
    else return num +sumatoria(num-1)
}
// console.log(sumatoria('asdas'))

//Nuevo arreglo

const nuevoArreglo=arrLength =>{
    const newArr =[]
    for (i=1;i<=arrLength; i++) newArr.push(i)
    return newArr
}
// console.log(nuevoArreglo(10))

// Clon String.split()
//split dummie (Sin considerar pasar un separador😝)
const split=(str)=>{
    str=str.toString().trim()
    return [...str]
}
// console.log(split('asd as  '))
// Clon split con opción de pasarle un separador
const splitNew =(str,separator)=>{
    if (separator){
        str=str.trim()
        const splitArr = [];
        let container = '';
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== separator) {
                container += str[i];
            } else {
                splitArr.push(container);
                container = '';
            }
        }
        splitArr.push(container); // Necesario para pushear el último bloque
        return splitArr;
    }else{
        return split(str)
    }
}

console.log(splitNew('Hola que hace ', ' '))


const arrayHandler=(arr1,arr2)=>{
    if (arr1.length !==arr2.length) throw new Error('Los arreglos deben tener el mismo número de elementos')
    for (i=0;i<arr1.length;i++){
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`)
    }
}
// arrayHandler([1,2,3,4], ['a','b','c','d'])

// Palíndromos

const palindromo =(phrase) =>{
    phrase=phrase.toString().toLowerCase().split(' ').join('')
    reversephrase = [...phrase].reverse().join('')
    console.log(phrase, reversephrase)
    return phrase===reversephrase
}
// console.log(palindromo('Anita lava la tina')) // true