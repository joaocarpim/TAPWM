// Função para o Exercício 1
function calcular() {
  const num1 = Number(document.getElementById("numero1").value);
  const num2 = Number(document.getElementById("numero2").value);
  const num3 = Number(document.getElementById("numero3").value);

  const array = [num1, num2, num3];
  const soma = array.reduce((acc, num) => acc + num, 0);

  function quadrado(num) {
    return num * num;
  }

  const quadradoPrimeiro = quadrado.apply(null, [array[0]]);
  const quadradoSegundo = quadrado.apply(null, [array[1]]);

  const resultado = `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoPrimeiro} e o quadrado do segundo é: ${quadradoSegundo}`;
  document.getElementById("resultadoEx1").innerText = resultado;
}

// Função para o Exercício 2
function verificarSubconjunto() {
  const palavra1 = document.getElementById("palavra1").value;
  const palavra2 = document.getElementById("palavra2").value;

  if (!palavra1 || !palavra2) {
    document.getElementById("resultadoEx2").innerText = "erro";
    return;
  }

  const resultado = palavra1.includes(palavra2)
    ? "é um subconjunto"
    : "não é um subconjunto";
  document.getElementById("resultadoEx2").innerText = resultado;
}
