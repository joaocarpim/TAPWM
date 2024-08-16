function maiorDeQuatro(a, b, c, d) {
  let maior = a;

  if (b > maior) {
    maior = b;
  }
  if (c > maior) {
    maior = c;
  }
  if (d > maior) {
    maior = d;
  }

  return maior;
}

function maiorDeQuatroMath(a, b, c, d) {
  return Math.max(a, b, c, d);
}

function ordemCrescente(a, b, c) {
  let menor, meio, maior;

  if (a <= b && a <= c) {
    menor = a;
    if (b <= c) {
      meio = b;
      maior = c;
    } else {
      meio = c;
      maior = b;
    }
  } else if (b <= a && b <= c) {
    menor = b;
    if (a <= c) {
      meio = a;
      maior = c;
    } else {
      meio = c;
      maior = a;
    }
  } else {
    menor = c;
    if (a <= b) {
      meio = a;
      maior = b;
    } else {
      meio = b;
      maior = a;
    }
  }

  return [menor, meio, maior];
}

function processarFormulario() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);
  const num4 = parseFloat(document.getElementById("num4").value);

  const maior1 = maiorDeQuatro(num1, num2, num3, num4);
  const maior2 = maiorDeQuatroMath(num1, num2, num3, num4);
  const ordenados = ordemCrescente(num1, num2, num3);

  document.getElementById(
    "resultadoMaiorIf"
  ).innerText = `Maior (usando if): ${maior1}`;
  document.getElementById(
    "resultadoMaiorMath"
  ).innerText = `Maior (usando Math.max): ${maior2}`;
  document.getElementById(
    "resultadoOrdem"
  ).innerText = `Ordem crescente: ${ordenados.join(", ")}`;
}
