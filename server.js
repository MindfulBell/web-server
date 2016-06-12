import express from 'express';
let app = express();

let middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		let date = new Date().toString();
		console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

const PORT = 3000

/*app.use(middleware.requireAuthentication);*/

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('ABOUT MOTHERFUCKER!')
})

app.use(express.static(__dirname + '/public')) //neato, this lets us access ANYTHING within the folder: localhost:3000/index.html

app.listen(PORT, function(){
	console.log(`Server listening on port ${PORT}!`)
})

//app level middleware runs for the entire application with app.use(middleware)
//route level middleware runs only for certain routes app.get(/, middleware, function (req, res){})

//middleware goes before the next element in the route