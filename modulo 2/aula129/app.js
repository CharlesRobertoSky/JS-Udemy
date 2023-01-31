const fs = require('fs').promises
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const write = require('./modules/write')
const read = require('./modules/read')

const pessoas = [
    {nome:'joão'},
    {nome:'paulo'},
    {nome:'ruan'},
    {nome:'asb'},
  ];

const json = JSON.stringify(pessoas, '', 2)
write(caminhoArquivo, json)

async function readArchive(caminho){
  const data = await read(caminho)
  // const data = await fs.readFile(caminhoArquivo, 'utf8')

  console.log(data)
  try{
    renderData(data)
  }catch(e){
   console.log('erro...', e)
  }
  
  
}
function renderData(data){
  data = JSON.parse(data)
  data.forEach(element => { console.log(element.nome)})

}
readArchive(caminhoArquivo)