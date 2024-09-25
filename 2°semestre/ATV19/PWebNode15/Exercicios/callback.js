const prompt = require("prompt-sync")();

function saudacao(nome){
    console.log("oi " + nome)
}

function entradaNome(callback) {
    var nome = prompt("Digite seu nome");
    callback(nome);
}

entradaNome(saudacao)