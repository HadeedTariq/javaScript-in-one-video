let fst=document.getElementById('fst')
let getColor=()=>{
    let rN=Math.floor(Math.random()*16777215)
    let rNCode='#'+rN.toString(16)
    document.body.style.background=rNCode
    fst.innerHTML=rNCode
}
function copy(){
    let rN=Math.floor(Math.random()*16777215)
    let rNCode='#'+rN.toString(16)
    navigator.clipboard.writeText(rNCode)
    alert('Your Code is copied to clipboard')
}