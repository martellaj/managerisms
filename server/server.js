var express = require('express');
var morgan = require('morgan');
var path = require('path');

var port = process.env.PORT || 8080; 

var app = express();
app.use(morgan('dev')); 
app.use(express.static(__dirname + '/..'));

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname + '/../client/index.html'));
});

// Start the app.  
app.listen(port);
console.log('Listening on port ' + port + '...');
console.log(path.join(__dirname + '/../client/index.html'));