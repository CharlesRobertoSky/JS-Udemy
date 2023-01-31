//getter e setters

function Pessoa (nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  let idadePrivado = idade;
  Object.defineProperty(this, 'idade',{
    enumerable: true, //mostra a chave
    configurable:false, //configurável
    get: function(){
      return idadePrivado;
    },
    set: value => {
      if(typeof value !== 'number'){
        throw new TypeError('erro');
      }
      idadePrivado
    }
  });
}

function criaProduto(nome){
  return {
    get nome(){
      return nome;
    },
    set nome(valor){
      valor = valor.replace('coisa.', '');
      nome=valor;
    }
  }
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2);
