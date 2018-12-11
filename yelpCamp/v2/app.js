var express  = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

// Creates a yelp+camp DB inside of mongoDB
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
})

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//         {
//             name: "Salmon Creek",
//             image: "https://www.yosemite.com/wp-content/uploads/2016/04/westlake-campground.png"
//         }, function(err, campground){
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log("Newly Created Campground")
//             }
//         }
//     );


// var campgrounds =[
//         {
//             name: "Salmon Creek",
//             image: "https://www.yosemite.com/wp-content/uploads/2016/04/westlake-campground.png"
//         },
//         {
//             name: "White Water",
//             image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5115421.jpg"
//         },
//         {
//             name: "Hill top",
//             image: "https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg"
//         }
//         ];


app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    // get all campgrounds from DB
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log("ERROR")
        }else{
            // Gets campground from DB
           res.render("campgrounds", {campgrounds:campgrounds}) 
        }
    })
        
})

// Gets the info from new.ejs and posts it to the server, then redirects to campgrounds.ejs
// Pushes new campground to arry which is rendered on campgrounds.ejs
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newcampground = {name: name, image:image};
    // create a new camfrond and save to DB
    Campground.create(newcampground, function(err, newlyCreated){
        if(err){
            console.log("Newly ERROR")
        }else{
            res.redirect("/campgrounds");
        }
    })
    
})

// Sends data to post route
app.get("/campgrounds/new", function(req, res){
    res.render("new");
})

 








app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started");
})