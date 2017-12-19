var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/css', express.static(__dirname + '/css'));

app.listen(port, function() { console.log('listening')});