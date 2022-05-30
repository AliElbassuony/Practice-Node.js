const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWxpZWxiYXNzdW9ueSIsImEiOiJjbDNydjhnMGIwcTZmM2JwZm84dWxwZXh0In0.xEYGJ6VsVOFSnU2v9urrkg&limit=1`

    request({url, json: true},(error, {body} = {}) => {
        if(error){
            callback('Connection Failed!', undefined)
        } else if (body.features.length === 0){
            callback('Not Exist Params', undefined)
        } else {
            const arr = body.features[0]
            data = {
                latitude: arr.center[1], 
                longitude: arr.center[0],
                location: arr.place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode