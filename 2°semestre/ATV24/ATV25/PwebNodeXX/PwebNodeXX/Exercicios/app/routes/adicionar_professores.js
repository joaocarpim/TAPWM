
module.exports = function(application){
   application.get('/admin/adicionar_professor', function(req,res){
      res.render('admin/adicionar_professor');
   });
   
   application.post('/professor/salvar', function(req,res){
      res.send("Salvo!!!!");

      res.send(req.body);
      console.log(req.body);
   
   });
}