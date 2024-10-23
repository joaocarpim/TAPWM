
var sql = require ('mssql');
 
var connSQLServer = function(){
   const sqlConfig = {
       user: 'BD2412015',
       password: 'sql@bento04',
       database:'LP2',
       server: 'Apolo',
       options:{
           encrypt: false,
           trustServerCertificate: true
       }
   }
   return sql.connect(sqlConfig);
}

module.exports = function() {
    console.log('O autoload carregou o módulo de conexão');
    return connSQLServer;
}
