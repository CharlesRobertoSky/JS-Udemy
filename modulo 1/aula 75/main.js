// factory functions

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    nomeCompleto(){
      return `${nome} ${sobrenome}`
    },

    altura: altura,
    peso: peso,

    fala: function(assunto){
      return `${this.nome} está ${assunto}.`; //.this vai se referir a variável dentro da função construtora
    },
    //getter
    get imc() {
      const indice = this.peso / ( this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}
const p1 = criaPessoa('Luiz', 'Otávio' , 1.8, 100);

const p2 = criaPessoa('Maria', 'Joaquina');
console.log(p2.fala('falando sobre Js'));
console.log(p1.imc);