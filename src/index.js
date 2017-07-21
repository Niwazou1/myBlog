var express = require('express');
var app = express();
let bodyParser = require('body-parser'); // ここ
let cookieParser = require('cookie-parser');
app.use(cookieParser());

let path = require('path');
app.set('view engine','pug');
app.set('views',path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true})); // ここ

app.use(express.static(path.join(__dirname, 'public')));

let morgan = require('morgan');
app.use(morgan('dev'));

let mysql = require('mysql');
let db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"myblog"
});
db.connect();
app.locals.db = db;

let route = require('./route');
route(app);

app.get('/', function(req, res){
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

