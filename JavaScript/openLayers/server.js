
var express = require('express');
//import express from 'express';
//import path from 'path';
//import ejs from 'ejs';
//const __dirname = path.resolve();

var app = express();

//var router = require('./route/main')(app);

app.set('views',__dirname+'/views');

app.use('/js', express.static('./js/'));

app.set('view engine','ejs');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res){
    res.render('./views/index.html')
});
app.get('/first', function(req,res){
    res.render('olPrc1.html')
});

var server = app.listen(1234, function(){
    console.log('Hi Express');
})

//let port = process.env.port || 3000;

//app.get('/', (req, res) => {
//   res.send('Hello world!');
//});

//const server = app.listen(port, () => {
//    console.log(`server on ${port}`);
//});