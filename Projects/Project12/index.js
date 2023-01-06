let qr=document.querySelector('.qr')
let ms=document.querySelector('#ms')
let open=document.querySelector('.open')
let ft=document.querySelector('.ft')
 function  mst(){
    let navbar=document.createElement('div')
    navbar.classList.add('navbar')
    navbar.innerHTML=`
    <nav>
    <ul id="ul">
        <h2>Coding Lab</h2>
        <div class="sd">
        <li class="li">DashBoard</li>
        <li class="li">ShortCut</li>
        <li class="li">Overview</li>
        <li class="li">Events</li>
        <li class="li">Services</li>
        <li class="li">Contact</li>
        </div>
    </ul>
</nav>
    `
    open.append(navbar)
    ft.innerHTML='<button id="btt" ><i id="mt" class="fa-duotone fa-xmark-large">X</i></button>'
    qr.innerHTML=''
      
    ft.querySelector('#btt').addEventListener('click',()=>{
        open.innerHTML=''
        ft.innerHTML='<button id="btn"><i id="ms" onclick="mst()" class="fa-sharp fa-solid fa-bars"></i></button>'
        // return
    })
}


