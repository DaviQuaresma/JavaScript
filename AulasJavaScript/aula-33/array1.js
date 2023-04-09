const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Legolas",
  "Aragorn",
  "Gimli",
];
console.log(arr);

//Adicionar Elementos
//push

let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

//unshift
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

//Remover Elementos
//pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//Shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar por um elemento
//includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

//indexof
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortar e Concatenar
//Slice

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

//concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//Substituição de elementos
//splice
const elemntosRemovidos = sociedade.splice(indice, 1, "Gandalf, O cinzento");
console.log(sociedade);
console.log(elemntosRemovidos);

//Iterar sobre os Elementos
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log(elemento + " se encontra na posição " + i);
}
