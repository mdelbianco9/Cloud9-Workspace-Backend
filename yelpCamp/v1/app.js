var express  = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

var campgrounds =[
        {
            name: "Salmon Creek",
            image: "https://www.yosemite.com/wp-content/uploads/2016/04/westlake-campground.png"
        },
        {
            name: "White Water",
            image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5115421.jpg"
        },
        {
            name: "Hill top",
            image: "https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg"
        }
        ];


app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
        res.render("campgrounds", {campgrounds:campgrounds})
})

// Gets the info from new.ejs and posts it to the server, then redirects to campgrounds.ejs
// Pushes new campground to arry which is rendered on campgrounds.ejs
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newcampground = {name: name, image:image};
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");
})

// Sends data to post route
app.get("/campgrounds/new", function(req, res){
    res.render("new");
})

 








app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started");
})