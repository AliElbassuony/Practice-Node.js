// CRUD Create Read Update Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = `mongodb://127.0.0.1:27017`
const databaseName = `Recap`

MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client) => {
    if(error){
        return console.log('Error!')
    }
    console.log('Connected!!')
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Ali',
        age: '23'
    })

})