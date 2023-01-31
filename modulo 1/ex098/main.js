// //validando cpf


// const cpf = '043.081.730-43';

// let cpfClear = cpf.replace(/\D+/g, '');
// let cpfArray = Array.from(cpfClear);

// function Validador(cpf){
//   this.cpf = cpf;
// }
// Validador.prototype.numero = function(breakPoint){

//   let regressor = breakPoint;
//   let numeroVerificado = this.cpf.map((value)=>{
//     if (regressor === 1) 0;
//     let num = value * regressor;
//     regressor -- ;
//     return num; 
//   })
//   .reduce((acumulador, value) => acumulador += value)
//   console.log(numeroVerificado)
//   this.cpf = numeroVerificado
// }

// Validador.prototype.validador = function(valor1, valor2){
//   this.valor1 = valor1
//   this.valor2 = valor2
//   function espressao(valor){
//     let res = 11 - (valor % 11)
//     if (res > 9) {
//       res = 0
//       return res
//     }
//     return res
//   }
//   console.log(valor1.cpf, valor2)
//   console.log(espressao(valor1.cpf))
//   console.log(espressao(valor2.cpf))
// }

// function validaCpf(cpf){

//   let valor1 = new Validador(cpf);
//   let valor2 = new Validador(cpf);
//   let verificando = new Validador()
//   valor1.numero(10);
//   valor2.numero(11);
//   verificando.validador(valor1, valor2)
// }
// validaCpf(cpfArray)


function ValidaCpf(cpfEnviado){
  Object.defineProperty(this, 'cpfLimpo',{
    enumerable:true,
    get: function(){
      return cpfEnviado.replace(/\D+/g, '')
    }
  });
}
ValidaCpf.prototype.valida = function(){
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criarDigito(cpfParcial);
  const digito2 = this.criarDigito(cpfParcial + digito1);
  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criarDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial)

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) =>{
    ac += (regressivo * Number(val));
    regressivo --;
    return ac;
  }, 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito)
};

ValidaCpf.prototype.isSequencia = function(){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

let cpf
let gerar = 0
let contador = 0
while(gerar !== 100000000){
  const random = String(Math.floor(Math.random() * 100000000000 ));

  let cpf = new ValidaCpf(random) 
  if(cpf.valida()){
    contador ++
  } 
  gerar ++ 
}

console.log(`Foi gerado ${contador} cpfs.`)