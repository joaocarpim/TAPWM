var soma = 0;
for(var i=2; i<=process.argv.length-1; i++)
    soma = soma + Number(process.argv[i]);
console.log('Soma = ' + soma);

// Escrever os parâmetros no console, no comando de execução
// ex: node terceiro 1, 2, 3