//Element Selector
let sp1=document.querySelector('#sp1')
let sp2=document.querySelector('#sp2')
let textarea=document.querySelector('#textarea')
//Main Logic
let total=0;
let remaining=50;
textarea.addEventListener('keydown',(e)=>{
    total++
    remaining--
    update()
})
function update(){
    if(total>50){
        return
    } 
    sp1.innerHTML=`${total}`
    sp2.innerHTML=`${remaining}`
}
update()