const requet = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=2a61d4cf7905485e11184ac974b00f52&query=37,40&units=f'

requet({url: url, json: true}, (error, response) => {
    
    const temperature = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    const weatherdesc = response.body.current.weather_descriptions[0];
    console.log(`${weatherdesc}. It is currently ${temperature} degrees out. It's feels like ${feelsLike} degrees.`)
})