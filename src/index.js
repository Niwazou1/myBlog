var express = require('express');
var app = express();

app.get('', function(req, r){
  r.send('Hello');
});

app.get('/', function (req, r) {
  r.redirect(302, '/name');
});
app.get('/name', function(req, r){
    r.send('Akasa');
});

app.get('/show/:id', function(req, r){
    r.send("ID:" + req.params.id);
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

