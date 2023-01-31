function imprimirTempoDecorrido(fTeste) {
  var nHoraInicial = Date.now(),
    vRetorno = fTeste(),
    nHoraFinal = Date.now()

  console.log(
    'Tempo decorrido: ' + String(nHoraFinal - nHoraInicial) + ' milisegundos'
  )
  return vRetorno
}
