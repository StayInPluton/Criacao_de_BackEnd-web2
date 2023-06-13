const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/', urlencodedParser, (req, res) => {
  var codigo  = req.body.codigo;
  var nome  = req.body.nome;
  var sanduiche  = req.body.sanduiche;
  var acompanhamento  = req.body.acompanhamento;
  var bebida  = req.body.bebida;
  var preco  = req.body.preco;

  res.send('<b>Código do pedido: </b>' + codigo + "<br>" +
           '<b>Nome: </b>' + nome + "<br>" +
           '<b>Sanduíche: </b>' + sanduiche + "<br>" +
           '<b>Acompanhamento: </b>' + acompanhamento + "<br>" +
           '<b>Bebida: </b>' + bebida + "<br>" +
           '<b>Preço: </b>' + preco);
});

app.listen(port, () => {
  console.log('Esta aplicação está escutando a porta ' + port);
});
