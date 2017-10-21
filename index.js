var express = require('express');
var path = require('path');
var morgan = require('morgan');
var ejs = require('ejs');
var bodyparser = require('body-parser');
var port = 3000;

var app = express();
var index = require('./routes/index.js');
var users = require('./routes/users.js');

app.use(morgan('dev'));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html',ejs.renderFile);
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use('/',index);
app.use('/users',users);

app.listen(port, function(){
    console.log('Server Started at port'+port);
});
