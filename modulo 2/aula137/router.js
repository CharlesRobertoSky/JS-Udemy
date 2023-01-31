const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeControler');
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(res, req, next){
  console.log()
  console.log('Passei no seu middleare')
  console.log()
  next()
}

//rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req,res,next){
  console.log()
  console.log('ainda estou aki')
});
route.post('/', homeController.trataPost)

//rotas de contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route;