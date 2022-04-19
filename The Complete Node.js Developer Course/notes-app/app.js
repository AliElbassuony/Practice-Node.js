const fs = require('fs')

// overwrite data to file.txt
//fs.writeFileSync('file.txt','This file was created by Node.js')

// append data to file.txt
fs.appendFileSync('file.txt','\nThis is new line by append method')