class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`A ${this.nome} está falando`);
  }
};


function Pessoa2(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function(){
  console.log(`A ${this.nome} está falando`)
};
const p1 = new Pessoa('Gustavo', 'Aluísio')
const p2 = new Pessoa2('Paulo', 'Garcia')

p1.falar()
p2.falar()