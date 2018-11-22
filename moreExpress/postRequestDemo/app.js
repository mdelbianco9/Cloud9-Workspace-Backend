var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
// Data ********
var friends = ["Tony", "Mirands", "Alheah", "Lilliana"];

// *******


// Routes -------------------------
app.get("/", function(req, res){
    res.render("home");
});

// Friends Route -----
app.get("/friends", function(req, res){
    res.render("friends", {friend: friends});
});

// POST request to add friend
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends")
});















app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});

