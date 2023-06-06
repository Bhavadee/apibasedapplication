const express = require("express");
const app = express();
const https = require("https");


app.get('/', (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7f49e937afaa46f39f19f3f4136c9bc8"
   https.get(url,function(response){
    
    response.on("data",function(data){
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
       res.send("climate in mumbai is" + data +"this")
    })
   })
    
})
app.listen(9985 ,() => {
    console.log('port connected');
})