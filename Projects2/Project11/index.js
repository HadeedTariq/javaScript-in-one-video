let btn=document.querySelector('#btn')//open
let btn2=document.querySelector('.close-btn')//close
let m2=document.querySelector('.m2')//second
let main=document.querySelector('.main')//first
btn.addEventListener('click',()=>{
    m2.classList.toggle('main2')
    m2.classList.toggle('m2')
    main.classList.add('m1')
})
btn2.addEventListener('click',()=>{
    m2.classList.toggle('main2')
    m2.classList.toggle('m2')
    main.classList.remove('m1')
})