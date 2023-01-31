
function criaMultiplicador(multiplicador){
  return function (numero){
    return numero * multiplicador
  }
};

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)
const quintriplica = criaMultiplicador(5)

console.log(duplica(4))
console.log(triplica(3))
console.log(quadruplica(3))
console.log(quintriplica(7))
