const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const city = process.argv[2]

if(!city){
    console.log('Missing Address!')
} else {
    geocode(city, (err, {latitude, longitude, location} = {}) => {
        if(err){
            return console.log(err)
        }
        forecast( latitude, longitude,(err, forecastData) => {
            if(err){
                return console.log(err)
            }
            console.log(location)
            console.log('Data ', forecastData)
        })

    })
}
