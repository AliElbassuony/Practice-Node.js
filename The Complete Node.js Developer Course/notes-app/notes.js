const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter( note => title === note.title )
    const duplicateNote = notes.find( note => title === note.title )
    //debugger
    // node inspect app.js
    // chrome://inspect
    // 127.0.0.1:9229
    // debug> restart
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log(chalk.red('Try another Title, because this title exist!'))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
    } catch (e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const UniqeNotes = notes.filter( note => note.title !== title)

    if(UniqeNotes.length !== notes.length) {
        saveNotes(UniqeNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    if(notes.length !== 0){
        console.log(chalk.green('Your notes'))
        notes.forEach(note => {
            console.log(note.title)
        })
    } else {
        console.log(chalk.red('No Note found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find(note => title === note.title)

    if(noteToRead){
        console.log(chalk.yellow(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red('No Note Found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}