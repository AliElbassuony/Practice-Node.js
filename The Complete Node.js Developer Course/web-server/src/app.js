const hbs = require('hbs')
const path = require('path')
const express = require('express')

// Create instance from Express
const app = express()

// Define paths for Express config
const publucDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Using Static directory to serve
app.use(express.static(publucDirPath))


app.get('',(req, res) => {
    res.render('index',{
        title: 'Weather',
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

app.get('/help/*',(req, res) => {
    res.render('404page',{
        title: 'Help article not found.',
        name: 'Ali'
    })
})


app.get('*', (req, res) => {
    res.render('404page',{
        title: 'Page not found.',
        name: 'Ali'
    })
})


app.listen(3000,() => {
    console.log('Server is up on port 3000.')
})