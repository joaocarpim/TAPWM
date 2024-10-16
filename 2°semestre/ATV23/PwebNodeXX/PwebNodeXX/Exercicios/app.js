var app = require('./app/config/server');

var rotaHome = require('./app/routes/home'); // só está definindo
rotaHome(app); // está executando

var rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

var rotaHistoria = require('./app/routes/historia'); 
rotaHistoria(app); 

var rotaCursos = require('./app/routes/cursos'); 
rotaCursos(app); // está executando

var rotaProfessores = require('./app/routes/professores'); // só está definindo
rotaProfessores(app); // está executando

/* poderia executar assim também*/
/*
var rotaAdicionarUsuario = require('./app/routes/adicionar_usuario')(app);

*/

app.listen(3000, function(){
	console.log("servidor iniciado");
});
