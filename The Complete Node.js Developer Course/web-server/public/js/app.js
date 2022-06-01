const weatherLocation = document.querySelector('form')
const search = document.querySelector('input')
const msg1 =  document.querySelector('#msg1')
const msg2 =  document.querySelector('#msg2')

const getLocation = location => {
    fetch('/weather?address=' + encodeURIComponent(location)).then((res) => {
        res.json().then((data) => {

            if(data.error){
                msg2.textContent = ''
                return msg1.textContent = data.error
            }

            msg1.textContent = data.location
            msg2.textContent = `Temperature is ${data.forecast.temperature} degree`
        
        })
    })
}

weatherLocation.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value 
    msg1.textContent = 'Loading.....'
    msg2.textContent = ''
    if(!location){
        msg2.textContent = ''
        return msg1.textContent = 'Enter Valid Input'
    }
    getLocation(location)
})
