const misMascotas = [ 
    { 
        nombre: 'Bimbo', 
        raza: 'perro', 
        edad: 2, 
        sonido: 'guau', 
        sonar(){ 
            return this.sonido + ' ' + this.sonido
        },
        aumentarEdad(){
            this.edad++
            return this.edad
        },
        aumentarEdad2(){
            this.edad <6 ? this.edad++ 
            :  this.edad >=6 && this.edad <=10 ? this.edad+=2
            : this.edad = this.edad/2
            return this.edad
        }
    },
    {
        nombre: 'Misifus', 
        raza: 'gato', 
        edad: 1, 
        sonido: 'miau', 
        sonar(){ 
            return this.sonido + ' ' + this.sonido
        },aumentarEdad(){
            this.edad++
            return this.edad
        },
        aumentarEdad2(){
            this.edad <6 ? this.edad++ 
            :  this.edad >=6 && this.edad <=10 ? this.edad+=2
            : this.edad = this.edad/2
            return this.edad
        }
    },
    {
        nombre: 'Piolin', 
        raza: 'pajaro', 
        edad: 12, 
        sonido: 'pio', 
        sonar(){ 
            return this.sonido + ' ' + this.sonido
        },
        aumentarEdad(){
            this.edad++
            return this.edad
        },
        aumentarEdad2(){
            this.edad <6 ? this.edad++ 
            :  this.edad >=6 && this.edad <=10 ? this.edad+=2
            : this.edad = this.edad + this.edad/2
            return this.edad
        }
    },
    {
        nombre: 'Perry', 
        raza: 'ornitorrinco', 
        edad: 6, 
        sonido: 'grrr', 
        sonar(){ 
            return this.sonido + ' ' + this.sonido
        },
        aumentarEdad(){
            this.edad++
            return this.edad
        },
        aumentarEdad2(){
            this.edad <6 ? this.edad++ 
            :  this.edad >=6 && this.edad <=10 ? this.edad+=2
            : this.edad = this.edad/2
            return this.edad
        }
    } 
    

  ]
// console.log(misMascotas[0].sonar())
// Prueba de métodos
misMascotas.forEach(mascota => {
    console.log(mascota.aumentarEdad2())
    console.log(mascota.sonar())
});

// Agregar ID
const checkArray = (arr)=>{
    for (let i=0;i<arr.length;i++){
        arr[i].id = i+1
    }
    return arr
}
// console.log(checkArray(misMascotas))


/*   Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y
retorne cuantos consecutivos similares hay en un string. 

Ejemplo: 
consecutivosSimilares(“AAAA”) debe retornar 3
consecutivosSimilares(“BBBBB”) debe retornar 4
consecutivosSimilares(“ABABABAB”) debe retornar 0
consecutivosSimilares(“BABABA”) debe retornar 0
consecutivosSimilares(“AAABBB”) debe retornar 4 /
*/
const consecutivosSimilares = (str)=>{
    let count = 0
    for (let i=0;i<str.length;i++){
        if (str[i]===str[i+1]) count++
    }
    return count
}
console.log(consecutivosSimilares('BABABA')) //0
console.log(consecutivosSimilares('AAAA')) //3



/*   Rotación de arreglo a la derecha
  Debes crear una función llamada “rotar” que reciba un arreglo y 
  un número, y debera retornar un nuevo arreglo con los elementos
   rotados la cantidad de veces como sea el número a la derecha.

  Ejemplo: 
  rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
  rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]
  */
 const rotar = (arr,num)=>{
     let newArr = []
     for (let i=0;i<arr.length;i++){
         if (i+num<arr.length) newArr.push(arr[i+num])
         else newArr.push(arr[i+num-arr.length])
     }
     return newArr
 }
 console.log(rotar([1, 2, 3, 4, 5], 2))