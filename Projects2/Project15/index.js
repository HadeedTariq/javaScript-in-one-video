let container = document.querySelector('.container')
//append in container
let loader = document.querySelector('#load-btn')
//event listener is in loader
//for increment to show image
loader.addEventListener('click', () => {
    let box = document.createElement('div')
    box.classList.add('fst')
    box.innerHTML = `
    <div class="box">
        <img class="box-img" src="https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}">
        <img class="box-img" src="https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}">
        <img class="box-img" src="https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}">
    </div>
    <div class="box">
        <img class="box-img" src="https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}">
        <img class="box-img" src="https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}">
        <img class="box-img" src="https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}">
    </div>
    `
    container.append(box)
})