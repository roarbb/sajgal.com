var express = require('express');
var port = process.env.PORT || 3000;
var app = express.createServer();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).configure(function() {
    app.use('/assets', express.static(__dirname + '/assets'));
    app.use('/css', express.static(__dirname + '/css'));
}).listen(port);