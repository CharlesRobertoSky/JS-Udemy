function Conta(agencia, conta, saldo){
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
  if(valor > this.saldo){
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
    return;
  }
  this.saldo -= valor;
  this.verSaldo();

}
Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo();
}

Conta.prototype.verSaldo = function(){
  console.log(`AG/C: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(10, 22, 15)

console.log(conta1);
conta1.depositar(12);

conta1.sacar(28)

function CC(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
  if(valor > (this.saldo + this.limite)){
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
}

const cc1 = new CC(11,22,0, 100)
console.log()
cc1.sacar(50)

function CP(agencia,conta,saldo){
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp1 = new CP(10,12,0)
conta1.sacar(1000)
