const http = require('http')
const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/alexandria.json?access_token=pk.eyJ1IjoiYWxpZWxiYXNzdW9ueSIsImEiOiJjbDNydjhnMGIwcTZmM2JwZm84dWxwZXh0In0.xEYGJ6VsVOFSnU2v9urrkg&limit=1'

const request = http.request(url, (res) => {
    let data = ''
    res.on('data', (chunk) => {
        data += chunk.toString()
    })

    res.on('end', () => {
        const dataJS = JSON.parse(data)
        console.log(dataJS)
    })
})

request.on('error', (err) => {
    console.log('Error' ,err)
})

request.end()