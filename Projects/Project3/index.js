let lower="abcdefghijklmnopqrstuvwxyz"
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers="1234567890"
let symbols="!#$%^&()~|"
//selectors
let type=document.getElementById('type')
let f1=document.getElementById('f1')
let u=document.getElementById('uppercase')
let l=document.getElementById('lowercase')
let n=document.getElementById('number')
let s=document.getElementById('symbol')

let random=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

 let generatePassword=(password="")=>{
     if(u.checked){
        password+=random(upper)
     }
     if(l.checked){
        password+=random(lower)
     }
     if(n.checked){
        password+=random(numbers)
     }
     if(s.checked){
        password+=random(symbols)
     }
     if(password.length <type.value){
         return generatePassword(password)
        }
     f1.value=truncateString(password,type.value)
 }
 function truncateString(str,num){
    if(str.length>num){
    let substr=str.substring(0,num)
    return substr
    }
    else{
        return str
    }
 }