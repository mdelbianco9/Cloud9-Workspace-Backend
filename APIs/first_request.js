var request = require('request');
request('https://www.google.com', function(error, response, body){
    if(error){
        console.log("Something went wrong")
    }else if (!error && response.statusCode == 200){
        console.log(body);
    }
})