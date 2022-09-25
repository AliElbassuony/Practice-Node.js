const { MongoClient, ObjectId } = require('mongodb')

const id = ObjectId()
const connectionURL = 'mongodb://127.0.0.1'
const databaseName = 'recap'

// console.log(id.toString())
// console.log(id.valueOf())
// console.log(id.getTimestamp())


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Error')
    }

    const db = client.db(databaseName)

    // db.collection('tasks').findOne({
    //     _id : ObjectId("631ee990a26a69eed3663e28")
    // },(error, user) => {
    //     if(error){
    //         return console.log("Error!")
    //     }

    //     console.log("Document: ", user)
    // })

    // db.collection("tasks").find({completed: false}).toArray((error, docs) => {
    //     if(error){
    //         return console.log("Error!")
    //     }

    //     console.log("Documents: ", docs)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false    
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then(res => console.log(res)).catch( err => console.log(err))

   // db.collection('tasks').deleteOne({description: 'Nodejs'})
        //.then( res => console.log(res))
        //.catch(err => console.log(err))


    // db.collection('users').insertOne({
    //     name: 'ali'
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Error!')
    //     }

    //     console.log(result)
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Nodejs',
    //         completed: true
    //     },
    //     {
    //         description: 'Cyber Talents',
    //         completed: false
    //     }
    // ],(error, result) => {
    //     if(error){
    //         return console.log('Error!')
    //     }
    //     console.log(result)
    // })
})