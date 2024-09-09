function validar() {
  const formElements = document.forms["nomeform"].elements;

  const nome = formElements["nome"].value;
  const email = formElements["email"].value;
  const comentario = formElements["comentario"].value;
  const pesquisa = formElements["pesquisa"].value;

  if (nome.length < 10) {
    alert("O nome deve ter no mínimo 10 caracteres.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("O email deve conter os caracteres '@' e '.'.");
    return false;
  }

  if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
    return false;
  }

  if (pesquisa === "nao") {
    alert("Que bom que você voltou a visitar esta página!");
    return false;
  } else {
    alert("Volte sempre a esta página!");
  }

  return true;
}
