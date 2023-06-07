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
       
       res.send("climate in mumbai is" + data +"this")
    })
     })
})

const PORT = process.env.PORT || 9985;
app.listen(PORT,() => {
    console.log('port connected');
})