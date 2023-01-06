let endDate='5 December 2022 12:26 PM'
// let fp=document.getElementsByClassName('fp')
// fp[0].innerHTML=endDate
let input=document.querySelectorAll('input')
function clock(){
    let end=new Date(endDate)
    let now=new Date()
    let diff=(end-now)/1000
    if(diff<0){
        return
    }
    input[0].value=Math.floor(diff/3600/24)
    input[1].value=Math.floor(diff/3600)%24
    input[2].value=Math.floor(diff/60)%60
    input[3].value=Math.floor(diff)%60
}
// clock()
setInterval(()=>{
    clock()
},1000)