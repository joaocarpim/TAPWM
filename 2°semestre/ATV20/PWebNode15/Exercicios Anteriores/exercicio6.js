
var http = require('http');

var server = http.createServer(function(req,res){
    res.end("<html><body>Site da Fatec Sorocaba</body></html>");
});
server.listen(3000);