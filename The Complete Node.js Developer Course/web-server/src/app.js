const path = require('path')
const express = require('express')

const app = express()
const publucDirPath = path.join(__dirname,'../public')

app.use(express.static(publucDirPath))
app.set('view engine','hbs')


app.get('',(req, res) => {
    res.render('index',{
        title: 'Welcome To My Youtube Channel',
        name: 'Ali'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title: 'Help Page',
        name: 'Ali'
    })
})

app.get('/about',(req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Ali'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Damanhour',
        forecast: 30
    })
})


app.listen(3000,() => {
    console.log('Server is up on port 3000.')
})