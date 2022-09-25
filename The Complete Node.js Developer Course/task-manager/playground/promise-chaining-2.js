const mongoose = require('../src/db/mongoose');
const Task = require('../src/models/task')

Task.findByIdAndRemove('62d034b62bfc583d27f02df7').then(task => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then(res => {
    console.log(res)
}).catch(err => console.log(err))