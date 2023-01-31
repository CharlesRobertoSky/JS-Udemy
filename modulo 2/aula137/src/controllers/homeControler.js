exports.paginaInicial =(req, res, next) => {
  res.render('index');
  next()
};

exports.trataPost = (req, res ,next) => {
  res.send('Sou sua nova rota de post')
  next()
}
