const chalk = require('chalk')
const yargs = require('yargs')

//custmize yargs version
yargs.version('1.1.0')

//add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv){
        console.log('Title: ',argv.title)
        console.log("Body: ",argv.body)
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

// we can use
yargs.parse()
//console.log(yargs.argv)