const pessoa = {
  nome: 'Joao',
  sobrenome: 'Augusto',
  idade: 23,
  cpf: '123.324.143-36',
  endereco: {
    rua: 'Av Brasil',
    num: '123'
  }
}
const { nome, sobrenome, ...resto } = pessoa
console.log(nome, sobrenome, resto)
