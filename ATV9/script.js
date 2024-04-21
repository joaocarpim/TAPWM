var res = document.querySelector('.resultado');
var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    var peso = parseFloat(document.querySelector('#peso').value);
    var altura = parseFloat(document.querySelector('#altura').value);
    var nome = document.querySelector('#nome').value;
    var imc = peso / (altura * altura) * 10000;

    if(imc <= 18.5){
        res.innerHTML = `Olá ${nome}, seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
    } else if(imc <= 24.9){
        res.innerHTML = `Olá ${nome}, seu IMC é ${imc.toFixed(2)}. Seu peso está normal.`;
    } else if(imc <= 29.9){
        res.innerHTML = `Olá ${nome}, seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`;
    } else if(imc <= 34.9){
        res.innerHTML = `Olá ${nome}, seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau I.`;
    } else if(imc <= 39.9){
        res.innerHTML = `Olá ${nome}, seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau II.`;
    } else if(imc <= 39.9){
        res.innerHTML = `Olá ${nome}, seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau II.`;
    } else {
        res.innerHTML = `Olá ${nome}, seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau III.`;
    }
});
   
