let sp=document.getElementById('sp')
//In sp the values are changed
let main=document.querySelector('.main')
//In main color is change
let btn=document.querySelector('#btn2')
//In btn we add event listener
let colors=['blue','brown','chartreus','darkgoldenrod'];
btn.addEventListener('click',()=>{
    let random=randomNumber();
    console.log(random)
    sp.innerHTML=colors[random]
    document.body.style.backgroundColor=colors[random]

})
function randomNumber(){
    return Math.floor(Math.random()*colors.length)
}
