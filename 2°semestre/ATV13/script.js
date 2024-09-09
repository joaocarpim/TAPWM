// Forma 1: Objeto Literal
let aluno1 = {
  RA: "12345",
  Nome: "João Silva",
};
document.getElementById(
  "forma1"
).textContent = `RA: ${aluno1.RA}, Nome: ${aluno1.Nome}`;

// Forma 2: Função Construtora
function Aluno(RA, Nome) {
  this.RA = RA;
  this.Nome = Nome;
}

let aluno2 = new Aluno("67890", "Maria Oliveira");
document.getElementById(
  "forma2"
).textContent = `RA: ${aluno2.RA}, Nome: ${aluno2.Nome}`;

// Forma 3: Classe
class AlunoClasse {
  constructor(RA, Nome) {
    this.RA = RA;
    this.Nome = Nome;
  }
}

let aluno3 = new AlunoClasse("11223", "Carlos Pereira");
document.getElementById(
  "forma3"
).textContent = `RA: ${aluno3.RA}, Nome: ${aluno3.Nome}`;
