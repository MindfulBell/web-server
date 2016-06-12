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

export default middleware;

//app level middleware runs for the entire application with app.use(middleware)
//route level middleware runs only for certain routes app.get(/, middleware, function (req, res){})

//middleware goes before the next element in the route