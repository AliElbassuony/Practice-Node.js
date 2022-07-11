const promise = new Promise((resolve, reject) => {
    // resolve(`Done!`)
    reject('Fail')
})
    console.log(promise)
promise.then((e) => {
    console.log('Sucssed!',e)
}).catch(e => {
    console.log('Error', e)
})