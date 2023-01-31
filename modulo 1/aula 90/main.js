
// defineProperty / defineProperties
function Pessoa (nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  Object.defineProperty(this, 'idade',{
    enumerable: true, //mostra a chave
    value: idade, //valor
    writable: true, //pode alterar
    configurable:false, //configurável
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra a chave
      value: nome, //valor
      writable: true, //pode alterar
      configurable:false, //configurável
    },

    sobrenome: {
      enumerable: true, //mostra a chave
      value: sobrenome, //valor
      writable: true, //pode alterar
      configurable:false, //configurável
    }
  });
}


const pessoa1 = new Pessoa('Carlos', 'Almeida', 43)
console.log(Object.keys(pessoa1))
