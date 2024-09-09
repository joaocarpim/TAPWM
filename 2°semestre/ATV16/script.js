function mDown(obj) {
  obj.querySelector("h1").innerText = "Solte o clique para consertar a janela";
  obj.querySelector("img").src = "./img/quebrada.png";
}

function mUp(obj) {
  obj.querySelector("h1").innerText = "Janela consertada";
  obj.querySelector("img").src = "./img/fechada.png";
}

function mMove(obj) {
  obj.querySelector("h1").innerText = "Quebrar com clique";
  obj.querySelector("img").src = "./img/fechada.png";
}

function mOut(obj) {
  obj.querySelector("h1").innerText = "Janela Fechada";
  obj.querySelector("img").src = "./img/fechada.png";
}
