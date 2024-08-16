function usuario() {
    let escolha = prompt("Escolha pedra, papel ou tesoura:");
    return escolha ? escolha.toLowerCase() : "pedra"; // Retorna 'pedra' como padrão se nada for escolhido
  }
  
  function computador() {
    let escolhas = ['pedra', 'papel', 'tesoura'];
    let indice = Math.floor(Math.random() * 3);
    return escolhas[indice];
  }
  
  function vencedor(usuario, computador) {
    if (usuario === computador) {
      return "Empate";
    } else if ((usuario === "pedra" && computador === "tesoura") ||
               (usuario === "tesoura" && computador === "papel") ||
               (usuario === "papel" && computador === "pedra")) {
      return "Usuário vence";
    } else {
      return "Computador vence";
    }
  }
  
  function jogar() {
    let vezUsuario = usuario();
    let vezComputador = computador();
    let resultado = vencedor(vezUsuario, vezComputador);
    alert("Usuário escolheu: " + vezUsuario + "\nComputador escolheu: " + vezComputador + "\nResultado: " + resultado);
  }