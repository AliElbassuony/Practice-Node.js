// Unlike regular functions, arrow functions do not have their own this.
// The value of this inside an arrow function remains the same throughout the lifecycle 
// of the function and is always bound to the value of this 
// in the closest non-arrow parent function.
const tryThis = {
    name : 'Ali',
    arr: [1,2],
    rec() {
        const that = this
          this.arr.forEach(function(c) { 
              console.log(that.name)
        })  
    }
}

tryThis.rec()

const event = {
    name: 'Apple',
    guestList: ['Ali','Mohamed','Omar'],
    printGuestList: function(){
        console.log('This List For ' + this.name + ' Event')

        this.guestList.forEach( guest => { 
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()