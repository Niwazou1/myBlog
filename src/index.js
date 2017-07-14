var express = require('express');
var app = express();

app.get('/', function (req, res) {
  r.send('Hello World!');
});
app.get('/name', function(req, res){
    res.send('Akasa');
});

app.get('/show/:id', function(req, res){
    res.send("ID:" + req.params.id);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

