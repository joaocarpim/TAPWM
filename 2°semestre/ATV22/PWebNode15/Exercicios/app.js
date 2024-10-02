

var app = require('./app/config/server');

var express = require('express');

app.get('/', function(req, res){
    res.render("home/index")
})
app.get('/formulario_adicionar_usuario', function(req, res){
    res.render("informacao/professores")
})
app.listen(3000, function(){
    console.log("Servidor carregado");
})
app.get('/informacao/cursos', function(req, res){
    res.render("informacao/cursos")
})
app.get('/informacao/professores', function(req, res){
    res.render("/informacao/professores")
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
app.listen(3000, function(){
    console.log("Servidor express carregado");
})