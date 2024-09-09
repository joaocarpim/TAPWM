class Retangulo {
  constructor(x, y) {
    this.base = x;
    this.altura = y;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

function calcularAreaRetangulo() {
  const meuRetangulo = new Retangulo(5, 3);
  const area = meuRetangulo.calcularArea();
  document.getElementById(
    "output-retangulo"
  ).innerText = `A área do retângulo é: ${area}`;
}

class Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo) {
    this._nomeCorrentista = nomeCorrentista;
    this._banco = banco;
    this._numeroConta = numeroConta;
    this._saldo = saldo;
  }

  get nomeCorrentista() {
    return this._nomeCorrentista;
  }

  set nomeCorrentista(valor) {
    this._nomeCorrentista = valor;
  }

  get banco() {
    return this._banco;
  }

  set banco(valor) {
    this._banco = valor;
  }

  get numeroConta() {
    return this._numeroConta;
  }

  set numeroConta(valor) {
    this._numeroConta = valor;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
}

class Corrente extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() {
    return this._saldoEspecial;
  }

  set saldoEspecial(valor) {
    this._saldoEspecial = valor;
  }
}

class Poupanca extends Conta {
  constructor(
    nomeCorrentista,
    banco,
    numeroConta,
    saldo,
    juros,
    dataVencimento
  ) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }

  get juros() {
    return this._juros;
  }

  set juros(valor) {
    this._juros = valor;
  }

  get dataVencimento() {
    return this._dataVencimento;
  }

  set dataVencimento(valor) {
    this._dataVencimento = valor;
  }
}

function mostrarDadosContas() {
  const minhaContaCorrente = new Corrente(
    "João",
    "Bradesco",
    "98765-4",
    7500,
    1500
  );
  const dadosCorrente = `Conta Corrente - Nome: ${minhaContaCorrente.nomeCorrentista}, 
  Banco: ${minhaContaCorrente.banco},   
  Número da Conta: ${minhaContaCorrente.numeroConta}, 
  Saldo: ${minhaContaCorrente.saldo}, 
  Saldo Especial: ${minhaContaCorrente.saldoEspecial}`;

  const minhaContaPoupanca = new Poupanca(
    "Maria",
    "Santander",
    "54321-9",
    4000,
    0.75,
    "15/11/2024"
  );
}

  const dadosPoupanca = `Conta Poupança - Nome: ${minhaContaPoupanca.nomeCorrentista}, 
  Banco: ${minhaContaPoupanca.banco}, 
  Número da Conta: ${minhaContaPoupanca.numeroConta}, 
  Saldo: ${minhaContaPoupanca.saldo}, 
  Juros: ${minhaContaPoupanca.juros}%, 
  Data de Vencimento: ${minhaContaPoupanca.dataVencimento}`;

  document.getElementById(
    "output-contas"
  ).innerHTML = `${dadosCorrente}<br><br>${dadosPoupanca}`;

