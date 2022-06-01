const greater = (user = 'Ali',age = 19,{info = 'Ali'} = {}) => {
    console.log(`Hello ${user} Your age is ${age} and info is ${info}.`)
}

greater('Mo',25)