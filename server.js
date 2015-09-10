var config = require('./config/config')
var express = require('express');
var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.render('index', {stylesheet: config.theme})
});

app.listen(3000);
console.log('Sass Theming app started');
