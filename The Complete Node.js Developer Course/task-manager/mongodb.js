// require mongodb
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// establish connection variables
const connectionURL = `mongodb://127.0.0.1:27017`
const databaseName = `task-manager`

// establish connection
MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client) => {
    if(error){
        return console.log(`Unable to connect to database!!`)
    }

    // Set Database Name
    const db = client.db(databaseName)

    // Insert
    db.collection('users').insertOne({
        name: `Ali`,
        age: '23'
    })


})