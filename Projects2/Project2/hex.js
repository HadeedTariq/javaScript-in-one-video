let sp=document.getElementById('sp')
//In sp the values are changed
let main=document.querySelector('.main')
//In main color is change
let btn=document.querySelector('#btn2')
//In btn we add event listener
let hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',()=>{
    let hexcolor='#';
    for(i=0;i<6;i++){
        hexcolor+=hex[getRandom()]
    }
    sp.innerHTML=hexcolor
    document.body.style.backgroundColor=hexcolor
})
function getRandom(){
    return Math.floor(Math.random()*hex.length)
}