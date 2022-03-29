function getHourToSeconds(seconds) {
  const data = new Date(seconds * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })
}
function startTime() {
  timer = setInterval(function () {
    segundos++
    res.innerHTML = getHourToSeconds(segundos)
  }, 1000)
}
console.log(getHourToSeconds(20))
const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')
const res = document.querySelector('#res')
let segundos = 0
let timer

document.addEventListener('click', function (e) {
  const el = e.target
  console.log(e)
  if (el.classList.contains('zerar')) {
    res.classList.add('pausado')
    clearInterval(timer)
    segundos = 0
    res.innerHTML = '00:00:00'
  }
  if (el.classList.contains('iniciar')) {
    res.classList.remove('pausado')
    clearInterval(timer)
    startTime()
  }
  if (el.classList.contains('pausar')) {
    res.classList.add('pausado')
    clearInterval(timer)
  }
})
// iniciar.addEventListener('click', function (event) {
//   res.classList.remove('pausado')
//   clearInterval(timer)
//   startTime()
// })

// pausar.addEventListener('click', function (param) {
//   res.classList.add('pausado')

//   clearInterval(timer)
// })

// zerar.addEventListener('click', function (param) {
//   res.classList.add('pausado')

//   clearInterval(timer)
//   segundos = 0
//   res.innerHTML = '00:00:00'
// })
