/*-------------CONCURSO FOTO----------- */
class Participant {
  constructor(name, likes) {
    this.name = name;
    this.likes = likes;
    //pusheamos la instancia de la clase al ser creada
    participants.push(this);
  }
}
const participants = [];
new Participant('Alice', 15);
new Participant('Bob', 20);
new Participant('Charlie', 8);
new Participant('David', 12);
new Participant('Eve', 25);
new Participant('Frank', 5);
new Participant('Grace', 18);
new Participant('Helen', 7);
new Participant('Isabel', 11);
new Participant('Jack', 30);
new Participant('Kate', 9);
new Participant('Liam', 14);
new Participant('Mia', 22);
new Participant('Noah', 6);
new Participant('Olivia', 17);

console.log(bubbleSortAsc(participants, 'likes'));

/*-----------TEMPERATURA-------------- */
class Temperatura {
  constructor(dia, mes, tempMax, tempMin) {
    this.dia = dia;
    this.mes = mes;
    this.tempMax = tempMax;
    this.tempMin = tempMin;
    temperaturas.push(this);
  }
}
const temperaturas = [];
//creamos los objetos temperatura programaticamente
for (let i = 1; i <= 30; i++) {
  const mes = 6;
  const dia = i;
  const tempMax = Math.floor(Math.random() * 45) + 1;
  const tempMin = tempMax - 10;
  new Temperatura(dia, mes, tempMax, tempMin);
}

console.log(bubbleSortAsc(temperaturas, 'dia'));

/*---------Bubble Sort Asc---------- */

function bubbleSortAsc(arr, property) {
  const n = arr.length;
  let compare;
  if (property) {
    compare = (a, b) => a[property] < b[property];
  } else {
    compare = (a, b) => a < b;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (compare(arr[j + 1], arr[j])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(`Ordena ascendente ${property ? 'por ' + property : ''}`);
  return arr;
}
