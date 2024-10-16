   
    module.exports = function(app){
        app.get('/informacao/professores', function(req,res){
            const sql = require ('mssql');
            
            const sqlConfig = {
                user: 'BD2412015',
                password: 'sql@bento04',
                database: 'LP2', //Na FATEC, utilizar o database BD ou LP8
                server: 'Apolo',//Caso o nome tenha uma instância, colocar duas barras, ex: ‘DESKTOP\\SQLSERVER. Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
                options: {
                    encrypt: false,
                    trustServerCertificate: true
                }
            }  
       
           async function getProfessores() {
               try {
                   const pool = await sql.connect(sqlConfig);
               
                    const results = await pool.request().query('SELECT * from PROFESSORES')
                    res.render('informacao/professores', {props: results.recordset});                    
         
                } catch (err) {
                    console.log(err)
               }
            }
           getProfessores();
        });
     }