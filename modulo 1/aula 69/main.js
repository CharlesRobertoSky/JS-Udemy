// // arguments que sustenta argumentos enviados

// function funcao(){
//   console.log(arguments);

// };

// funcao(1,2,3,4,5,6,7,8); // enviara dados para uma função sem parametros guardando na vareavel arguments em forma de objeto


// // função atribuição via desestruturação
// function rest([carro, placa, modelo], ){
//   console.log(carro, placa, modelo, arguments)
// }
// var veiculo = ["Civic", "Only123", "Honda", "RWD", "Converível"];

// rest(veiculo);

const conta = function(operador, acumulador, ...numeros){
  for (let numero of numeros){
    if(operador === "+") acumulador += numero;
    if(operador === "-") acumulador += numero;
    if(operador === "*") acumulador *= numero;
    if(operador === "/") acumulador /= numero;
  }
  console.log(acumulador)
};
conta('+', 1, 20, 30, 40, 50, 60, 70, 80, 90);

const arrowRest = (...args) =>{
  console.log(args);
};

arrowRest(args)
