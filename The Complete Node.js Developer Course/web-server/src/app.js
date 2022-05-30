const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Working!')
})

app.get('/help', (req,res) => {
    res.send('Helping!!!')
})

app.get('/about',(req, res) => {
    res.send('<H1>Welcome To My Youtube Channel!</H1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Damanhour',
        forecast: 30
    })
})
app.listen(3000,() => {
    console.log('port 3000 gotit')
})