

module.exports = function(app){
    app.get('/informacao/professores/detalhaProfessor', function(req,res){
   
         async function getProfessoresID() {
             try {
                 var connection = app.config.dbConnection;
   
                 const pool = await connection();
   
                 const results = await pool.request().query('SELECT * FROM professores WHERE id_professor = 1') 

                 res.render('informacao/professores/detalhaProfessor',{profs :  results.recordset});
   
             } catch (err) {
                 console.log(err)
             }
         } 
   
     getProfessoresID();
     });
  }