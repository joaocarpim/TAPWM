function Retangulo(x, y) {
  this.base = x;
  this.altura = y;
  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function calcularArea() {
  const base = document.getElementById("base").value;
  const altura = document.getElementById("altura").value;
  const retangulo = new Retangulo(base, altura);
  document.getElementById(
    "ex1"
  ).textContent = `A área do retângulo é: ${retangulo.calcularArea()}`;
}

function Conta(nomeCorrentista, banco, numeroConta, saldo) {
  this.nomeCorrentista = nomeCorrentista;
  this.banco = banco;
  this.numeroConta = numeroConta;
  this.saldo = saldo;

  this.getNomeCorrentista = function () {
    return this.nomeCorrentista;
  };
  this.setNomeCorrentista = function (nomeCorrentista) {
    this.nomeCorrentista = nomeCorrentista;
  };
  this.getBanco = function () {
    return this.banco;
  };
  this.setBanco = function (banco) {
    this.banco = banco;
  };
  this.getNumeroConta = function () {
    return this.numeroConta;
  };
  this.setNumeroConta = function (numeroConta) {
    this.numeroConta = numeroConta;
  };
  this.getSaldo = function () {
    return this.saldo;
  };
  this.setSaldo = function (saldo) {
    this.saldo = saldo;
  };
}

function Corrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
  Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
  this.saldoEspecial = saldoEspecial;

  this.getSaldoEspecial = function () {
    return this.saldoEspecial;
  };
  this.setSaldoEspecial = function (saldoEspecial) {
    this.saldoEspecial = saldoEspecial;
  };
}

function Poupanca(
  nomeCorrentista,
  banco,
  numeroConta,
  saldo,
  juros,
  dataVencimento
) {
  Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
  this.juros = juros;
  this.dataVencimento = dataVencimento;

  this.getJuros = function () {
    return this.juros;
  };
  this.setJuros = function (juros) {
    this.juros = juros;
  };
  this.getDataVencimento = function () {
    return this.dataVencimento;
  };
  this.setDataVencimento = function (dataVencimento) {
    this.dataVencimento = dataVencimento;
  };
}

const contaCorrente = new Corrente(
  "Elon Musk",
  "Goldman Sachs",
  "12345",
  7.5,
  2.3
);
const contaPoupanca = new Poupanca(
  "Jeff Bezos",
  "J.P. Morgan Chase",
  "67890",
  985,
  1.5,
  "12/01/2024"
);


document.getElementById("ex2").innerHTML = `
            Conta Corrente:<br>
            Nome: ${contaCorrente.getNomeCorrentista()}<br>
            Banco: ${contaCorrente.getBanco()}<br>
            Número da Conta: ${contaCorrente.getNumeroConta()}<br>
            Saldo: R$ ${contaCorrente.getSaldo()} TRI<br>
            Saldo Especial: R$ ${contaCorrente.getSaldoEspecial()} TRI<br><br>

            Conta Poupança:<br>
            Nome: ${contaPoupanca.getNomeCorrentista()}<br>
            Banco: ${contaPoupanca.getBanco()}<br>
            Número da Conta: ${contaPoupanca.getNumeroConta()}<br>
            Saldo: R$ ${contaPoupanca.getSaldo()} BI<br>
            Juros: ${contaPoupanca.getJuros()}%<br>
            Data de Vencimento: ${contaPoupanca.getDataVencimento()}
        `;
