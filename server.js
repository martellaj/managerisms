var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path'); 

// Initialize variables. 
var port = process.env.PORT || 8080; 

// Configure morgan module to log all requests.
app.use(morgan('dev')); 

// Set the public folder to serve public assets.
app.use(express.static(__dirname + '/public'));

// Configure app to handle CORS requests.
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, \Authorization');

	next();
});

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start the app.  
app.listen(port);
console.log('Listening on port ' + port + '...'); 