let content = document.getElementsByClassName('content')[0];
let pt=document.getElementsByClassName('pt')[0];
let fp = document.getElementById('fp')
let fs = document.getElementById('fs')
let fd = document.getElementById('fd')
let fq = document.getElementById('fq')
let ld = async () => {
    let c = prompt('Please Enter Your Name')
    let d =async () => {
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(fp.innerHTML = `Hacking ${c} facebook id`)
        }, 2000);
});
}
    let g =async () => {
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(fs.innerHTML = `Please wait accessing to ${c} facebook account...`)
        }, 2000);
});
}
    let q =async () => {
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve( fd.innerHTML = `${c} facebook user name is ${c}18....`)
        }, 2000);
});
}
    let r =async () => {
        return new Promise((resolve,reject)=>{
        setInterval(() => {
            resolve(fq.classList.toggle('pt'))
        }, 900);
});
}
let e = await d();
console.log(e)
let s = await g();
console.log(s)
let p = await q();
console.log(p)
let x = await r();
console.log(x)
}
ld();
