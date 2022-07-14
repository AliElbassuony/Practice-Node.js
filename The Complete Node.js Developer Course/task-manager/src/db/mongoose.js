const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User',{
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Ali',
//     age: 23
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => console.log(error))

const Task = mongoose.model('Task',{
  description: {
    type: String
  } ,
  completed: {
    type: Boolean
  }
})

const task1 = new Task({
    description: 'Never Give UP',
    completed: false
})

task1.save().then(() => console.log(task1)).catch((error) => console.log(error))