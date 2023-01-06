let btn = document.getElementsByClassName('btn')
btn[0].innerHTML = '<'
btn[1].innerHTML = '>'
let img = document.querySelectorAll('.img')
img.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
let counter=0

let slideImageLeft = () => {
    counter++
    slideImage()  
}

    let slideImageRight = () => {
        counter--
        slideImage()
    }
 let slideImage=()=>{
    img.forEach(
        (slide) => {
            slide.style.transform = `translateX(${counter * 100}%)`
        }
    )
 }