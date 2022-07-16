const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

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
                throw new Error(`Password can't contain password`)
            }   
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(`Email is invalid!`)
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error(`Age must be a positive number!`)
            }
        }
    }
})

const me = new User({
    name: ' Ayat ',
    email: ' Ayat@ali.IO ',
    password: 'passw0rd'
})

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => console.log(error))

const Task = mongoose.model('Task',{
  description: {
    type: String,
    required: true,
    trim: true
  } ,
  completed: {
    type: Boolean,
    default: false 
  }
})

const task1 = new Task({
    description : 'Never Give UP',
    // completed: false
})

task1.save().then(() => console.log(task1)).catch((error) => console.log(error))