function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * percentual / 100)
}

Produto.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * percentual / 100)
}
//literal
const p1 = new Produto('Carro', 2000)
const p2 = {
  nome:'caneca',
  preco:20
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(20)
console.log(p2)

const p3 = Object.create(Produto.prototype,{
  preco:{
    writable:true,
    value:30,
    enumerable:true,
    configurable:true
  },
  tamanho:{
    writable:true,
    value:50,
    enumerable:true,
    configurable:true
  }
})

p3.aumento(50)
console.log(p3)

