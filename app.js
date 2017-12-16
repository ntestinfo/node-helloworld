var express = require('express');
var app = express();

app.get('/', function (req, res) {
  	res.send('Hello World!');
});

app.listen(8001, function () {
  	console.log('HelloWorld app listening on port 8001!');
});