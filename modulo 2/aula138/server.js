require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./router');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware')
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true})
  .then(() => {
    console.log('Conectei a base de dados')
    app.emit('pronto')
  })
  .catch(e => console.log(e))

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware)
app.use(routes);

app.on('pronto', () =>{
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
})
