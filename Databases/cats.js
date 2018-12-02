var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        temperament: String
    }
);

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong")
//     }else{
//         console.log("We jsut saved a Cat");
//         console.log(cat);
//     }
// });

Cat.find({}, function(err, cats ){
    if(err){
        console.log("Oh NO, Error" + err)
    }else{
        console.log("We found CATS!!")
        console.log(cats);
    }
})

// Cat.create({
//     name: "Snow",
//     age: 13,
//     temerament: "Nice"
// }, function(err, cat ){
//     if(err){
//         console.log("Oh NO, Error" + err)
//     }else{
//         console.log("We found SNOW!!")
//         console.log(cat);
//     }});