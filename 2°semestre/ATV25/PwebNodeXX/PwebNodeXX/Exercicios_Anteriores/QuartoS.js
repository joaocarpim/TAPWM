// pode ser feito como: import fs from 'fs'
const fs = require('fs');
const data = fs.readFileSync('file.txt');

// a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());