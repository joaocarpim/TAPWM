module.exports = function(app){
    app.get('/informacao/professores', function(req,res){
        async function getProfessores() {
            try {
   
                var connection = app.config.dbConnection;
                const pool = await connection(); //executar
  
                const results = await pool.request().query('SELECT * from PROFESSORES');
  
               res.render('informacao/professores',{profs :  results.recordset});
  
            } catch (err) {
                console.log(err)
            }
        }
  
    getProfessores();
    });
 };