module.exports = function (app){
    app.get('/', function(req,res){
        res.render('main.html')
    });
    app.get('/first', function(req,res){
        res.render('olPrc1.html')
    });
}