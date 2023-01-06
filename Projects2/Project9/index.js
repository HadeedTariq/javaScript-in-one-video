let ham=document.querySelector('.ham')
let cross=document.querySelector('.cross')
let box=document.querySelector('.box')
ham.addEventListener('click',()=>{
    box.classList.toggle('kox')
})
cross.addEventListener('click',()=>{
    if(box.classList.contains('kox')){
        box.classList.remove('kox')
    }
})
