const chalk = require('chalk')
const yargs = require('yargs')

//custmize yargs version
yargs.version('1.1.0')

//add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'add note',
    hadler: function(){
        console.log('Adding note!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function(){
        console.log('removing note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log('listing note!')
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function(){
        console.log('reading note!')
    }
})

console.log(yargs.argv)