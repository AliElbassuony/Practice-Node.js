const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 5, 1])
        // reject(`Things Went Wrong!`)
    })
})

console.log(promise)

promise.then((e) => {
    console.log('Sucssed!',e)
}).catch(e => {
    console.log('Error', e)
})
