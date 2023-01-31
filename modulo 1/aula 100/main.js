const beber ={
  beber(){
    console.log(`${this.nome} está bebendo.`);
  }
};
const comer ={
  comer(){
    console.log(`${this.nome} está comendo.`);
  }
};
const falar ={
  falar(){
    console.log(`${this.nome} está falando.`);
  }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome){
  return Object.create(pessoaPrototype, {
    nome : { value : nome },
    sobrenome : { value : sobrenome }
  })
};

const p1 = criaPessoa('Claudio', 'lima')

console.log(p1.comer())