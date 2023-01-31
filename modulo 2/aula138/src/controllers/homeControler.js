exports.paginaInicial =(req, res, next) => {
  res.render('index');
  next()
};

exports.trataPost = (req, res ,next) => {
  console.log(req.body.cliente)
  next()
}
