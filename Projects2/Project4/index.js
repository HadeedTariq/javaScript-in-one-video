let number = document.querySelector('#number')
let button = document.querySelectorAll('.innerbtn')
let count = JSON.parse(localStorage.getItem('counter'));
count = Number.parseInt(count)


if (!count) {
    count = 0
}
//decrease
button[0].addEventListener('click', () => {
    
    count--
    number.classList.add('red')
    updatelocalstorage()
    number.innerHTML = `${count}`
})
//reset
button[1].addEventListener('click', () => {
    count = 0;
    number.classList.add('black')
    number.innerHTML = `${count}`
    updatelocalstorage()

})
//increase
button[2].addEventListener('click', () => {
    count++
    number.classList.add('green')
    updatelocalstorage()
    number.innerHTML = `${count}`
})
//localstorage
function updatelocalstorage() {
    localStorage.setItem('counter', JSON.stringify(count))
}