// const numeros = ['casa', 'carro', 'banco', 'pneu', 'cachorro']

// // parâmetros do filter retornando booleans
// // function callbackFilter(valor, indice, array){
// //   if(valor < 10){
// //     return true
// //   }
// //   return false
// // }

// // //constante recebendo objetos filtrados
// // const numerosFiltrados = numeros.filter(callbackFilter)

// const numerosFiltrados = numeros.filter(v => v > 10)

// console.log(numerosFiltrados)
// console.log(typeof(numerosFiltrados))
 
const pessoas = [
  {nome: 'Luis', idade: 35},
  {nome: 'Caio', idade: 25},
  {nome: 'Letícia', idade: 73},
  {nome: 'Roberto', idade: 21},
  {nome: 'Antonio', idade: 61},
  {nome: 'Alberto', idade: 43}
]
const idadePessoaMaiorCinquenta = pessoas.filter(obj => obj.idade > 50)
const nomeMenorQueCinco = pessoas.filter(obj => obj.nome.length < 5)
const terminaNomeComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(idadePessoaMaiorCinquenta)
console.log(terminaNomeComA)
console.log(nomeMenorQueCinco)