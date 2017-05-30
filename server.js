var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var app = express();
var port = 3000;

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next){
  res.render('home');
});

app.get('/about', function(req, res, next){
  res.render('about');
});

app.listen(port, function(){
  console.log('SERVER STARTED @ ' + port);
});
