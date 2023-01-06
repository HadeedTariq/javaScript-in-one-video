//For adding the score
let score=document.querySelector('#scr')
//For question
let question=document.querySelector('#question')
//To get input
let input=document.querySelector('#inp')
//form
let form=document.querySelector('#form')
//to add event listener
let button=document.querySelector('#btn')
let num1=Math.floor(Math.random()*10)
let num2=Math.floor(Math.random()*10)
let correctans=num1*num2
question.innerHTML=`What is ${num1} multiply by ${num2} ?`
let scr=JSON.parse(localStorage.getItem('score'));
if(!scr){
    scr=0
}
score.innerHTML=`score:${scr}`
form.addEventListener('submit',()=>{
    let userans=input.value
    userans=Number.parseInt(userans)
    if(userans===correctans){
        scr++
        updateLocalStorage()
    }
    else{
        scr--
        updateLocalStorage()
    }
})
function updateLocalStorage(){
    localStorage.setItem('score',JSON.stringify(scr))
}