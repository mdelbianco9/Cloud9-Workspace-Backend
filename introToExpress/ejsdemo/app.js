var express = require("express");

var app = express();

// Serves our public folder
app.use(express.static("public"));
// Makes it so we dont have to add .ejs after all ejs files like home.ejs, love.ejs..
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
    // res.send("Welcome to the home page")
})

app.get("/love/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
    // res.send("Welcome to the home page")
})

app.get("/posts", function(req, res) {
    var posts = [
            {title: "Post1",
             author: "Susy"
            },
             {title: "Post2",
             author: "Mark"
            },
             {title: "Post3",
             author: "Ben"
            },
        ]
        
        res.render("posts", {posts: posts})
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
})