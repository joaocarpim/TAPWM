module.exports = function(application){
    application.get('/admin/editar_professor', function(req,res){
      
        async function getProfessorPorId() {
            try {
                var id_professor = req.query.id;
   
                var connection = application.config.dbConnection;
                const pool = await connection();
   
                var professoresModel = application.models.professormodel;
   
                professoresModel.getProfessorPorId(id_professor, pool, function(error, results){
                    res.render('admin/editar_professor', { profs : results.recordset });
                });
   
            } catch (err) {
                console.log(err)
            }
        } 
   
        getProfessorPorId();
     });
   
    application.post('/professor/editar', function(req,res){
   
        async function editarProfessor(){
            try {
                var professor = req.body;
                  
                var connection = application.config.dbConnection;
                const pool = await connection();
   
                var professoresModel = application.models.professormodel;
   
                // //usando uma funcao de callback e informar quem devemos salvar, no caso professor
   
                
                professoresModel.editarProfessor(professor,pool, (error, results)=>{
                     // após inserir redireciona o navegador para outra página
                     // se der erro na inclusao criar um erro 500 --> nao sabe o que significa
                    
      
                     if(error){
                     console.log('Erro ao inserir no banco:' + error);
                         res.status(500).send(error);
                     } else {
                         console.log('professor editado!!!');
                         res.redirect('/admin/crud_professores');
                     }
                });
            } catch (error) {
                console.log(error);
             }
         }
         editarProfessor();
     });
  }