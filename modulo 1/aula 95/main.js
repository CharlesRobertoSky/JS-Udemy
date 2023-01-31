function Produto(name, price){
  this.name = name;
  this.price = price;
};

Produto.prototype.aumento = function(quantia){
  this.price += quantia
};

Produto.prototype.desconto = function(quantia){
  this.price -= quantia
}
function Camiseta (nome, price, cor){
    Produto.call(this, nome, price)
    this.cor = cor;
};

Camiseta.prototype  = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(aumento){
  this.price = this.price + (this.price * aumento / 100);
}


function Caneca(nome, price, material, estoque){
  Produto.call(this, nome, price);
  this.material = material;
  Object.defineProperty(this, 'estoque',{
    enumerable: true,
    configurable: false,
    get: function(){
    return estoque;
    },
    set: function(valor){
      if(typeof valor  !== 'number') return;
      estoque = valor;
    }
  });
};

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Camiseta', 35, 'azul');

const caneca = new Caneca ('canequinho', 50, 'porcelana', 10);
camiseta.desconto(10);
caneca.aumento(10)
caneca.estoque = 100  
console.log(camiseta);
console.log(caneca);
