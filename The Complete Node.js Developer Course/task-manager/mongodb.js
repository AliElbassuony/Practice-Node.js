// require mongodb
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// establish connection varialbes
const connectionURL = `mongodb://127.0.0.1:27017`
const databaseName = `task-manager`

// establich connection
MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client) => {
    if(error){
        return console.log(`Unable to connect to database!!`)
    }

    console.log('Connected!')
})