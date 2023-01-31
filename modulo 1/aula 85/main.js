//Aula função map
// const numero = [1,23,12,52,3,45,6,15,43,75,7,42,3,56,78,9,24]
// const numeroDuplicado = numero.map(value => value * 2)
// console.log(numeroDuplicado)

const pessoas = [
  {nome: 'Luis', idade: 35},
  {nome: 'Caio', idade: 25},
  {nome: 'Letícia', idade: 73},
  {nome: 'Roberto', idade: 21},
  {nome: 'Antonio', idade: 61},
  {nome: 'Alberto', idade: 43}
]
const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)
const idades = pessoas.map(obj => ({idade : obj.idade}))
console.log(idades)
const identification = pessoas.map((obj, index)=>{
  const newObj = {...obj}
  newObj.id = index;
  return newObj; 
}); 
console.log(identification)
console.log(pessoas)