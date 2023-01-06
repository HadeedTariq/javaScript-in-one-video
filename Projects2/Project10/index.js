let navbar=document.querySelector('.navbar')
let box2=document.querySelector('#box2')
let mainContent=box2.offsetTop-navbar.offsetHeight
window.addEventListener('scroll',()=>{
if(window.scrollY>mainContent){
    navbar.classList.add('active')
}
else{
    navbar.classList.remove('active')
}
})