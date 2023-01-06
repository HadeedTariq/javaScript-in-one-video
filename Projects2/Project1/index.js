let main = document.querySelectorAll('.hq')
let h3 = document.getElementById('h3')
let f='1:00 Pm'
function clock() {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    if(hour>12){
        hour=hour-12
        h3.innerHTML='PM'
    }
    main[0].innerHTML = `${hour}`
    main[1].innerHTML = `${minute}`
    main[2].innerHTML = `${second}`
   
}
setInterval(() => {
    clock()
}, 1000);
