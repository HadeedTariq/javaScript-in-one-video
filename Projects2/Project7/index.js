let ham=document.querySelector('.ham')
let ul=document.querySelector('.ul')
ham.addEventListener('click',()=>{
    if(ul.classList.contains('spt')){
        ul.classList.remove('spt')
    }
    else{
        ul.classList.add('spt')
    }
})