const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 5, 1])
        // reject(`Things Went Wrong!`)
    })
})


promise.then((e) => {
    console.log('Sucssed!',e)
}).catch(e => {
    console.log('Error', e)
})

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}


add(1, 2).then((sum) => {
    console.log(sum)

    return add(sum, 2)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})