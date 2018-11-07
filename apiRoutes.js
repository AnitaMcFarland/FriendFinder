module.exports = function(router, routingApp){
 
    const {User} = routingApp.models;
 
    router.get('/', function(req, res, next){
        User.find({}, function(err, users){
            res.render('users', { users: users });
        });
    });
}