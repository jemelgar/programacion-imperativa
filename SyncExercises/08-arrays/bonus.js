const imprimirInverso = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
};

const inversorNative = (array) => array.reverse();

const sumaArray = (array) => array.reduce((a, b) => a + b, 0);

const join = (array, separator = '') => {
    let result = '';
    for (const letter of array) {
      result += letter.toString() + separator;
    }
    return result;
};

//------------------------Ejecución------------------------
const arr = [1, 2, 3, 4, 5];
//Invierte  
imprimirInverso(arr);
console.log(inversorNative(arr));
//suma
console.log(sumaArray([1, 2, 3]));
console.log(sumaArray([-5, 100, 19]));
//join
console.log(join(['h', 'o', 'l', 'a']));
console.log(join(['c', 'h', 'a', 'u'], '-'));
