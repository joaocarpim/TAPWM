module.exports = function(){
    this.getProfessores = function(connection, callback){
        connection.query('select * from professores', callback);
    }
    this.getProfessor = function(connection, callback){
        connection.query('select * from professores WHERE id_professor=1', callback);
    }
  
    this.getProfessorPorId = function(id_professor, connection, callback){
       connection.query(`select * from professores WHERE id_professor=${id_professor}`, callback);
    }
    this.salvarProfessor = function(professor, connection, callback){
        connection.query(`INSERT INTO professores (NOME_PROFESSOR,EMAIL_PROFESSOR) VALUES ('${professor.nome_professor}','${professor.email_professor}')`, callback);
    }
  
    this.deletarProfessor = function(professor, connection, callback){
        connection.query(`DELETE FROM professores WHERE ID_PROFESSOR=${professor.id_professor}`, callback);
    }
  
    this.editarProfessor = function(professor, connection, callback){
        connection.query(`UPDATE professores SET NOME_PROFESSOR = '${professor.nome_professor}', EMAIL_PROFESSOR = '${professor.email_professor}'  WHERE ID_PROFESSOR=${professor.id_professor} `, callback);
    }
  
    return this;
   
 }