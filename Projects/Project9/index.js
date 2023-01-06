let inp=document.getElementById('inp')
let h2=document.querySelector('#h2')
let p=document.querySelector('#p')
let img=document.querySelector('#img')
let str=document.querySelectorAll('.str')
const apiURL='https://api.github.com/users/'

inp.addEventListener('keyup',(e)=>{
    if(e.key=='Enter'){
    getUser(inp.value)
    getRepos(inp.value)
    str[0].classList.add('pop')
    str[1].classList.add('pop')
    str[2].classList.add('pop')
    }
})
let getUser=async(username)=>{
    let response=await fetch(apiURL+username)
    let data=await response.json()
    h2.innerHTML=data.login
    p.innerHTML=data.bio
    img.src=data.avatar_url
    str[0].innerHTML=data.followers
    str[1].innerHTML=data.following
    str[2].innerHTML=data.public_repos
    console.log(data)
}
let getRepos=async(username)=>{
    let repos=document.querySelector('.repos')
    let response=await fetch(apiURL+username+'/repos')
    let data=await response.json()
    data.forEach((item) => {
        let elem=document.createElement('a')
        elem.classList.add('repo')
        elem.href=item.html_url
        elem.target='_blank'
        elem.innerText=item.name
        repos.appendChild(elem)
    });
}