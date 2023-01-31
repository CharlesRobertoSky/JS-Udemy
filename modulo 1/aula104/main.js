class Dispositivo {
  constructor (nome){
    this.nome = nome
    this.ligado = false
  }
  ligar(){
    if(this.ligado){
      return;
    }
    this.ligado = true
  }

  desligar(){
    if(!this.ligado){
      return;
    }
    this.ligado = false
  }
  
}

class Celular extends Dispositivo{
  constructor(nome, cor, modelo){
    super(nome)
    this.cor = cor
    this.modelo = modelo
  }
}

const d1 = new Celular('Samsung', 'preto', 'A21')
d1.ligar()
console.log(d1)