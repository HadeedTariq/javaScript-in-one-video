function play() {
    let gif=document.getElementsByClassName('gif')
    let n = prompt('Enter Your alarm time in seconds')
    setTimeout(() => {
        gif[0].innerHTML='<img src="bg.gif" alt="">'
    }, 1000 * n);
}