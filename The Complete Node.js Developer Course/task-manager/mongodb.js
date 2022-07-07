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

    // Insert One in Users Collection
    // db.collection('users').insertOne({
    //     name: `Mohamed`,
    //     age: '22'
    // },(err, res) => {
    //     if(err){
    //         return console.log(Error)
    //     }

    //     console.log(res)
    // })

    // Insert Many in Tasks Collections
    db.collection('tasks').insertMany([
        {
            description: 'Study Nodejs',
            completed: true
        },{
            description: 'Practice Tools',
            completed: false
        },{
            description: "Don't Waste Time",
            completed: false
        }
    ],(err, res) => {
        if(err){
            return console.log('Unable insert Documnets!')
        }

        console.log(res)
    })
})