function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg != 'string') {
      reject('BAD VALUE')
      return
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Promise Resolvida')
    }, tempo)
  })
}

const promises = [
  'Primeiro valor',
  esperaAi('promise 1', 3000),
  esperaAi('promise 2', 500),
  esperaAi('promise 3', 1000),
  'outro valor'
]

Promise.all(promises)
  .then(function (valor) {
    console.log(valor)
  })
  .catch(function (erro) {
    console.log(erro)
  })

function baixaPagina() {
  const emCache = false
  if (emCache) {
    return promises.resolve('Pagina em Cache')
  } else {
    return esperaAi('Baixei a pagina', 3000)
  }
}
baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log(e))
