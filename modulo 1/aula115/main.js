//npx babel main.js -o bundle.js
//npx babel main.js -o bundle.js --presets=@babel/env
const nome = 'Luiz'
const obj = { nome }
const novoObj = { ...obj }
console.log(novoObj)
