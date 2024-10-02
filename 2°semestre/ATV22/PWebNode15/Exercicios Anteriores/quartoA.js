
function Parte1() { 
    for (var i = 1; i <= 10; i++) { 
    console.log("primeira parte:" + i); 
    } 
} 
setTimeout(Parte1, 2000); 
 
const fs = require('fs');

    fs.readFile('file.txt', (err, data) => { 
        if (err) throw err; 
        const registros = data.toString().split('\n');18
        registros.forEach((registro, index) => { 
        console.log("segunda parte:" + registro); 
    }); 
});