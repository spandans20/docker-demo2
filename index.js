var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! This is your host Spandan trying to rule over Jenkins, Github and Docker');
});

var server = app.listen(3003, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
