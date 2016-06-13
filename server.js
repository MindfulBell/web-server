var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('ABOUT!!')
})

app.use(express.static(__dirname + '/public')) //neato, this lets us access ANYTHING within the folder: localhost:3000/index.html

app.listen(PORT, function(){
	console.log('Server listening on port ' + PORT)
})

