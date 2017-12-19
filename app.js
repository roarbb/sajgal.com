var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
})

app.use('/assets', express.static(__dirname + '/assets'))
app.use('/css', express.static(__dirname + '/css'))

app.listen(port)