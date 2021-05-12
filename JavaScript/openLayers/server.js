var express = require('express');
var app = express();
var router = require('./route/main')(app);

app.set('views',__dirname+'/views');
app.use('/js', express.static('./js/'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
var server = app.listen(1234, function(){
    console.log('Hi Express');
})

app.get('/', function(req,res){
    res.send('hello world');
});