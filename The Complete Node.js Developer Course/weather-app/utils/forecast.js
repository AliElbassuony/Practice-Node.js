const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2a61d4cf7905485e11184ac974b00f52&query=${latitude},${longitude}`
    request({url, json: true},(error, { body } = {}) =>{
        if(error){
            callback('Connection Failed!', undefined)
        } else if(body.error){
            callback('Not Existing Params!', undefined)
        } else{
            data = {
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike,
                weatherdesc: body.current.weather_descriptions[0]
            }
            callback(undefined, data)
        }
    })
}

module.exports = forecast
