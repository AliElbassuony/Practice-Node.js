const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/recap-api')

const Task = mongoose.model('Task',{
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        defalut: false
    }
})


const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password Cannot Contain Password')
            }
        }
    }
    ,
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid Email!')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('You Should Enter Positive Value!') 
            }
        }
    }
})

const task = new Task({
    description: 'Hello From Mongoose!',
    completed: true
})


const user = new User({
    name: 'ALi',
    age: 21,
    email: 'alyelbassuony@gmail.com',
    password: 'PasasWOrd',
})

user.save().then( () => console.log(user)).catch(err => console.log(err))

// task.save().then( () => {
//     console.log(task)
// }).catch( err => console.log(err))