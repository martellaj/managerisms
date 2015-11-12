var express = require('express');
var apiRoutes = express.Router();

/**
 * @path /hello
 * @desc Just a test call to make sure we're up and running.
 */
apiRoutes.get('/hello',
	function (req, res) {
		res.json({
			'data': 'Hello, world!'
		});
	});

module.exports = apiRoutes;