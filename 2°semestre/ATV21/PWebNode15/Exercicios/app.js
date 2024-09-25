
var express = require('express');
var app = express();

app.set('view engine' )

app.get('/formulario_adicionar_usuario', function(req, res){
    res.render("admin/")

})

app.get('/informacao/historia', function(req, res){
    res.render("informacao/historia")

})

app.get('/informacao/cursos', function(req, res){
    res.render("informacao/cursos")

})

app.get('/informacao/professores', function(req, res){
    res.render("/informacao/professores")

})

app.listen(3000, function(){
    console.log("Servidor express carregado");
})



app.get('/historia', function(req, res){
    res.render("secao/historia")

})

app.get('/cursos', function(req, res){
    res.render("secao/cursos")

})

app.get('/professores', function(req, res){
    res.render("secao/professores")

})