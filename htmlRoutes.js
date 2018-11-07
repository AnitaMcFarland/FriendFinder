module.exports = function(router, routingApp, args){
 
    router.get('/', function(req, res, next){
        res.render('index', { message: args.message });
    });
 
    router.use('/user', routingApp.Route(__dirname+'/user'));
}