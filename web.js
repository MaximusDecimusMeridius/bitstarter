var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var text = fs.readFileSync("index.html");

var buffer = new buffer();

var content = buffer.toString("utf-8",text);


app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
