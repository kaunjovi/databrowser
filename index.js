var express = require('express') ; 
var app = express() ; 

app.use( express.static('public')); 

app.get('/', function(req, res){
  res.send('Hello world.'); 
}) ; 

app.get('/index.html', function( req, res){
  res.sendFile( __dirname + "/" + "index.html") ; 
});

var server = app.listen(8080, function(){
  
  var host = server.address().address ; 
  var port = server.address().port ; 

  console.log('Express app listening on %s:%s', host, port) ; 
  console.log('Kaching...');
}) ; 