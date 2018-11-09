var friendsArray = require("../data/friendsArray");



module.exports = function(app){
 
    app.get("/api/friends",function(req,res){
        res.json(friendsArray);
    });
app.post("/api/friends",function(req,res){
    if (friendsArray); 

})
// get match info to post results.

app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsArray.length = [];
    

    res.json({ ok: true });
  });
};
