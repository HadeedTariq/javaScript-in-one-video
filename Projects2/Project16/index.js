let btn=document.querySelector('#main-btn')
let slide=document.querySelector('.slide')
let video=document.querySelector('.video-container')
btn.addEventListener('click',()=>{

    if(!slide.classList.contains('slide2')){
        slide.classList.add('slide2')
        video.play()
    }
    else{
        slide.classList.remove('slide2')
        video.pause()
    }
    
})
//preloader
let preloader=document.querySelector(".preloader")
window.addEventListener('load',()=>{
    preloader.classList.add('hidepreloader')
})