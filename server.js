var express   	= require('express');
var app        	= express();
var mongoose		= require('mongoose'); 
var morgan 			= require('morgan');
var path 				= require('path'); 

// Initialize variables. 
var port = process.env.PORT || 8080; 

// Connect to DB.
// mongoose.connect(dbConnectionString);

// Configure morgan module to log all requests.
app.use(morgan('dev')); 

// Set the front-end folder to serve public assets.
app.use(express.static(__dirname + '/frontend'));

// Configure app to handle CORS requests.
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, \Authorization');

	next();
});

// Route registration. 
// var apiRouter = require('./app/routes/apiRouter');
// app.use('/api', apiRouter); 

// Set up our one route to the index.html file.
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/frontend/views/index.html'));
});

// Start the app.  
app.listen(port);
console.log('Listening on port ' + port + '...'); 