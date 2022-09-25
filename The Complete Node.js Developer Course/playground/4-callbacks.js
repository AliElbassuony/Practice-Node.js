const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback(`This For Error!`,undefined);
        callback(undefined,['ALi','Mohamed']);
    },1000);
}

doWorkCallback((error ,result) => {
    if(error){
        return console.log(error)
    }

    console.log(result)
})

console.log('Hello')