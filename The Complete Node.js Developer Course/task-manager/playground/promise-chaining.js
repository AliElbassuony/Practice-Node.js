require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('62d05ca3d4381ca4c56cc0d4', {age: 1}).then(user => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})