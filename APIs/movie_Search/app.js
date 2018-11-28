var express = require("express");
var app = express();
// Makes it so we can make API requests
var request = require("request");
// makes it so we dont have to write .ejs in the render functions
app.set("view engine", "ejs");
// Hooks up to app.css
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search
    request("http://www.omdbapi.com/?s=" + query + "&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data})
        }
    })
});
















app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Server Has Started")
})