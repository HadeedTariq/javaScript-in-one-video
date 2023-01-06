let fp = document.getElementById('fp')
function st() {
    let value = fp.value;
    let p = prompt('Enter Your data name')
    let c;
    if(p){
    c=confirm("You want to save this data")
    }
    if (p && c) {
        localStorage.setItem(`${p}`, `${value}`)
        alert('Your data is saved into local storage')
    }
    fp.value = '';
}
