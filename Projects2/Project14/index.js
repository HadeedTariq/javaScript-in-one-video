let image=document.querySelector('.image')
let imageBox=document.querySelectorAll('.image-box')

image.addEventListener('dragstart',(e)=>{
    image.classList.add('border')
    setTimeout(() => {
        image.classList.remove('border')
    }, 0);
})
image.addEventListener('dragend',(e)=>{
    e.target.classList.add('image')
})

imageBox.forEach((img)=>{
    img.addEventListener('dragover',(e)=>{
    e.preventDefault()
    })
    img.addEventListener('dragenter',(e)=>{
    e.target.classList.add('dashed')
    })
    img.addEventListener('dragleave',(e)=>{
    e.target.classList.remove('dashed')
    })
    img.addEventListener('drop',(e)=>{
        e.target.append(image)
    })
})