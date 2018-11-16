var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my first express site")
})

// first problem
app.get("/:action/:animal", function(req, res){
    var arr = [{animal: "pig",sound: "Oink"},{animal: "cow",sound: "Moo"},{animal: "dog",sound: "Ruf"}];
    var speak = req.params.action;
    var animal = req.params.animal;
    
    for(i=0; i<arr.length; i++){
        if(animal.toLowerCase() == arr[i].animal){
            res.send("The " + animal + " says " + arr[i].sound)
        }
    }
})

app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = req.params.num;
    var str = '';
    
        for(i=0; i<num; i++){
           str += word + " ";
        }
    res.send(str);
})

app.get("*", function(req, res){
    res.send("Sorry, this is not a page genius.")
})



// Tell the app to listen on the server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started");
})