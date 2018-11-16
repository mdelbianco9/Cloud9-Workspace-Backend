var express = require('express');
// app is just a big object
var app = express();

// gets the "/" request, then res.send gives up back the response (route)
app.get("/", function(req, res){
    res.send("Hi there")
})

app.get("/bye", function(req, res){
    res.send("Good Bye!")
})

app.get("/dog", function(req, res){
    res.send("MEOW")
})

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to " + subreddit.toUpperCase() + " Page");
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    var id = req.params.id;
    var title = req.params.title;
    var subreddit = req.params.subredditName;
    res.send("Welcome to " + subreddit.toUpperCase() + " Page with an ID of " + id.toUpperCase() + " and a TITLE of " + title.toUpperCase());
})

// Sends any route that isnt a defiend one (like above) then itlls go here. Must be at the end of all other routes
app.get("*", function(req, res) {
    res.send("You are a Star!")
})

// Tell the appto listen on the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started");
})
