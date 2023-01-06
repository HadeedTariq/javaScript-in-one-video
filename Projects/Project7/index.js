let text=document.getElementById('text')
let btn = document.getElementById('btn')
let main = document.querySelector('#main')
btn.addEventListener('click', () => {
    addNote()
})
let addNote = () => {
    let note = document.createElement('div')
    note.classList.add('Note')
    note.innerHTML = `
            <div class="tool">
                <i class="trash fa-sharp fa-solid fa-trash"></i>
                <i class="save fa-solid fa-floppy-disk"></i>
            </div>
            <textarea id="text"></textarea>
    `;
    note.querySelector('.trash').addEventListener('click',()=>{
        note.remove()
    })
    note.querySelector('.save').addEventListener('click',()=>{
        saveNote()
    })
    main.appendChild(note)
}
let saveNote=()=>{
     let notes=document.querySelectorAll('.Note textarea')
     let data=[]
     notes.forEach((note)=>{
        data.push(note.value)
     })
     localStorage.setItem('notes',JSON.stringify(data))
}