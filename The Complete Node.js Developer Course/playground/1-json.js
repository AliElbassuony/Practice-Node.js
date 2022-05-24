const fs = require('fs') 

// const book = {
//     title: 'The Road To Be Hacker!',
//     author: 'ALi'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.author)

// read data from json file by system modules
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Ali"
data.planet = "Earth"
data.age = 24


const newData = JSON.stringify(data)

fs.writeFileSync('1-json.json',newData)

















