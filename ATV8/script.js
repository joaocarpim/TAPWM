 
 // MODAL. Obtém elementos DOM 
 var modal = document.getElementById("myModal");
 var btn = document.getElementById("myBtn");
 var span = document.getElementsByClassName("close")[0];

 //  fecha o modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Fecha o modal se clica em qualquer lugar fora 
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 document.getElementById("surveyForm").addEventListener("submit", function(event){
     event.preventDefault(); // Evita o envio padrão do formulário
     modal.style.display = "block"; // Mostra o modal
 });



let idades = [];
let opinioes = { otimo: 0, bom: 0, regular: 0, pessimo: 0 };
let ttalHomens = 0;
let ttalMulheres = 0;

function addPessoa(idade, sexo, opiniao) {
  idades.push(idade);
  opinioes[opiniao]++;
  if (sexo === 'M') ttalHomens++;
  if (sexo === 'F') ttalMulheres++;
}

function mediaIdade() {
  return idades.reduce((acc, idade) => acc + idade, 0) / idades.length;
}

function maisVenha() {
  return Math.max(...idades);
}

function maisNova() {
  return Math.min(...idades);
}

function votoPessimo() {
  return opinioes.pessimo;
}

function porcentMb() {
  const totalOtimoBom = opinioes.otimo + opinioes.bom;
  return (totalOtimoBom / idades.length) * 100;
}

document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const idade = parseInt(document.getElementById('idade').value);
  const sexo = document.getElementById('sexo').value;
  const opiniao = document.getElementById('opiniao').value;
  
  
  addPessoa(idade, sexo, opiniao);
  
  alert('Média de idade: ' + mediaIdade());
  alert('Idade mais velha: ' + maisVenha());
  alert('Idade mais nova: ' + maisNova());
  alert('Quantidade de "péssimo": ' + votoPessimo());
  alert('Porcentagem de "ótimo" e "bom": ' + porcentMb().toFixed(2) + '%');
  alert('Número de homens que responderam: ' + ttalHomens);
  alert('Número de mulheres que responderam: ' + ttalMulheres);
  
  document.getElementById('surveyForm').reset();
});



