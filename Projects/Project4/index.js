let questions=[
    {
     'que':'Where JavaScript is used',
     'a':'Web Development',
     'b':'Software Development',
     'c':'app Development',
     'd':'None of these',
     'correct':'a'
    },
    {
     'que':'Where Python is used',
     'a':'Web Development',
     'b':'Software Development',
     'c':'Both a and b',
     'd':'None of these',
     'correct':'c'
    },
    {
     'que':'Where Java is used',
     'a':'Web Development',
     'b':'Software Development',
     'c':'app Development',
     'd':'Both a and c',
     'correct':'d'
    },
    {
     'que':'JSON stands for _______.',
     'a':'JavaScript Object Notation',
     'b':'Java Object Notation',
     'c':'JavaScript Object Normalization',
     'd':'JavaScript Object-Oriented Notation',
     'correct':'a'
    },
    {
     'que':'JSON is a _____ for storing and transporting data.',
     'a':'xml format',
     'b':'text format',
     'c':'JavaScript',
     'd':'php format',
     'correct':'b'
    }
]
let index=0
let total=questions.length
let right=0
let wrong=0
let h3=document.getElementById('h3')
let optionof=document.querySelectorAll('.optionof')
let loadQuestion=()=>{
    if(index==total){
        return end()
    }
    reset()
    let data=questions[index]
    h3.innerHTML=`${index+1}) ${data.que}`
    optionof[0].nextElementSibling.innerHTML=data.a
    optionof[1].nextElementSibling.innerHTML=data.b
    optionof[2].nextElementSibling.innerHTML=data.c
    optionof[3].nextElementSibling.innerHTML=data.d
}
let sub=()=>{
    let data=questions[index]
    const ans=getanswer()
    if(ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++
    loadQuestion()
    return
}
let getanswer=()=>{
    let answer;
    optionof.forEach((input)=>{
        if(input.checked){
            answer= input.value
        }
    })
    return answer
}
const reset=()=>{
    optionof.forEach((input)=>{
        if(input.checked){
            input.checked=false
        }
    })
}
let end=()=>{
    document.getElementsByClassName('fg')[0].innerHTML=`
    <div style="text-align:center;">
    <h3 id='h3'>Thankyou for playing the quiz</h3>
    <h2 id='h3'>${right}/${total} are correct</h2>
    </div>
    `
}
loadQuestion()