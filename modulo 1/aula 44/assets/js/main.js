function calcular() {
  let peso = document.querySelector('input#peso')
  let altura = document.querySelector('input#altura')
  let res = document.querySelector('div#res')
  res.innerHTML = '<h4>Aguardando resultado...</h4>'
  let p = Number(peso.value)
  let a = Number(altura.value)
  if (a <= 0 && p <= 0) {
    res.innerHTML = '<h4>Por favor, informe um valor!</h4>'
  } else if (a <= 0 || a >= 2.5) {
    res.innerHTML = '<h4>Altura inválida, por favor verifique!</h4>'
  } else if (p <= 0 || p >= 300) {
    res.innerHTML = '<h4>Peso inválido, por favor verifique!</h4>'
  } else {
    let r1 = a ** 2
    let result = p / r1
    let result1 = result.toFixed(2)
    if (result < 18.5) {
      res.innerHTML = `<h4>Seu imc é ${result1} (Abaixo do peso)</h4>`
    } else if (result >= 18.5 && result < 25) {
      res.innerHTML = `<h4>Seu imc é ${result1} (Peso normal)</h4>`
    } else if (result >= 25 && result < 30) {
      res.innerHTML = `<h4>Seu imc é ${result1} (Sobrepeso)</h4>`
    } else if (result >= 30 && result < 35) {
      res.innerHTML = `<h4>Seu imc é ${result1} (Obesidade grau 1)</h4>`
    } else if (result >= 35 && result < 40) {
      res.innerHTML = `<h4>Seu imc é ${result1} (Obesidade grau 2)</h4>`
    } else {
      res.innerHTML = `<h4>Seu imc é ${result} (Obesidade grau 3)</h4>`
    }
  }
}
