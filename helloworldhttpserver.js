var http = require('http') ; 

var server = http.createServer( function( req, res){
  res.writeHead(200) ; 
  res.end('hello world from server.'); 
}); 
server.listen(8080) ; 