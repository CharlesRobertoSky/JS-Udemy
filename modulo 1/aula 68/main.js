// Declaração de função (function hoisting)
falaOi();
function falaOi(){
  console.log('oi');
}

//First-class objects (objetos de primeira classe)
//Function expression
const souUmDado= function(){
  console.log('sou um dado');
};
souUmDado();

function executaFuncao(funcao){
  console.log('Vou executar sua função abaixo:');
  funcao();
};
executaFuncao(souUmDado);

// Arrow function

const funcaoArrow = () =>{
  console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto

const obj = {
  falar(){
    console.log('Estou Falando...');
  }
};
obj.falar();
