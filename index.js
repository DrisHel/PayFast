var express = require('express');
var app = express ();

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000.');
});

app.get('/teste', function(req, res){
console.log('Recebida requisiçao de teste na porta 3000.');
res.send('Seja bem vindo!!!');
});