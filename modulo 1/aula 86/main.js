const pessoas = [
  {nome: 'Luis', idade: 35},
  {nome: 'Caio', idade: 25},
  {nome: 'Letícia', idade: 73},
  {nome: 'Roberto', idade: 21},
  {nome: 'Antonio', idade: 61},
  {nome: 'Alberto', idade: 43}
]

const maisVelha = pessoas.reduce((acumulador, value)=> {
  if(acumulador.idade > value.idade ) return acumulador
  return value
})
console.log(maisVelha)