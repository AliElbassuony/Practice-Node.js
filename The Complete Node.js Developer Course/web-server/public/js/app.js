const weatherLocation = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const icon = document.getElementById('icon')

const getLocation = location => {
    fetch('/weather?address=' + encodeURIComponent(location)).then((res) => {
        res.json().then((data) => {

            if(data.error){
                icon.src = ''
                msg2.textContent = ''
                return msg1.textContent = data.error
            }

            msg1.textContent = data.location
            msg2.textContent = `Temperature is ${data.forecast.text}.`
            icon.src = `${data.forecast.icon}`
        
        })
    })
}

weatherLocation.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value 
    msg1.textContent = 'Loading.....'
    msg2.textContent = ''
    icon.src = ''
    if(!location){
        icon.src = ''
        msg2.textContent = ''
        return msg1.textContent = 'Enter Valid Input'
    
    }
    getLocation(location)
})
