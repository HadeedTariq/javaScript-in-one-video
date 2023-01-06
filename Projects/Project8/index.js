let inp=document.querySelector('#inp')
let nav=document.querySelector('.nav')
inp.addEventListener('keyup',(e)=>{
        if(e.key == "Enter"){
            addTodo(inp.value)
            let data=[]
            data.push(inp.value)
            localStorage.setItem('Todo',JSON.stringify(data))
            inp.value=''
            
        }
})
let addTodo=(item)=>{
    let f=document.createElement('li')
    f.innerHTML=`
    ${item}
    <i class="fs fa-sharp fa-solid fa-circle-xmark"></i>
    `
    f.querySelector('i').addEventListener('click',()=>{
        f.remove()
    })
    nav.appendChild(f)
   
}
