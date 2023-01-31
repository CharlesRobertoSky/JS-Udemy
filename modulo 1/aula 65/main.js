function mostraHora() {
  let data = new Date()
  return data.toLocaleTimeString('PT-BR', { hour12: false })
}
const timer = setInterval(() => {
  console.log(mostraHora())
}, 1000)

setTimeout(function () {
  clearInterval(timer)
}, 3000)
setTimeout(function () {
  console.log('olá Mundo!')
}, 5000)
