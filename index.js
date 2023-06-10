const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
   
   
   })
    app.post("/",function(req, res){
       
        const query = req.body.cityName;
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=7f49e937afaa46f39f19f3f4136c9bc8"
        https.get(url,function(response){
    
    response.on("data",function(data){
        const weatherData = JSON.parse(data)

        const url = "https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
       res.write("<p>the weather is currently"+weatherData.weather[0].description+"</p>");
       res.write("<h2>climate in "+ query +" is" + weatherData.main.temp+ "</h2>");
       res.write("<img src = " + url +" >");
       res.send()
    })
     })
})

const PORT = process.env.PORT || 9985;
app.listen(PORT,() => {
    console.log('port connected');
})