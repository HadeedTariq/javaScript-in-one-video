let text = [
    `This page gathers observations about handling of text direction and language in JSON data. Many, if not all, of the observations are also relevant to other aspects of string handling. It doesn't make recommendations, it just aims to draw together useful background information, questions and lines of thought to help determine the best course of action to support text direction and language metadata associated with strings in JSON objects. It was written by r12a, and these are personal thoughts, not endorsed by the i18n WG.`,
    `Note: it is difficult to represent bidi examples satisfactorily. For example, "פעילות הבינאום, W3C" doesn't actually show the expected position of 'W3C' when displayed, but also doesn't represent the order of characters in memory, since the first such character is פ. Where code examples below show characters from left-to-right in the order in which they are stored in memory, we'll use Hebrew to avoid the confusing effects of Arabic letters joining backwards.`,
    `When talking about markup in JSON strings we will make the assumption for the purposes of this discussion that the markup is HTML5.`,
    `In order to support correct display of text in right-to-left scripts, when they are eventually displayed to a human, it is necessary to be able to:`,
    `The Unicode Bidirectional Algorithm specifies that the paragraph direction can be established by seeking out the first strong directional character in the paragraph. While doing so, an application must ignore non-strong characters at the start of the paragraph, as well as any characters inside an isolated range. If the first strong directional character has a Unicode value that equates to RTL, then the paragraph direction is RTL. If there are no strong characters identified, the default is LTR.`,
    `The importance of establishing the paragraph direction can be illustrated with a couple of examples which show how it affects the order in which elements in the string will be rendered to a user. Without this information, users may be unable to understand a message. For example, the following shows a string presented with a RTL base direction
    Rtl-base-direction.png`,
    `Here is the same string presented with a LTR base direction.
Ltr-base-direction.png
Here is another example, this time a sequence of numbers, such as you may find in a telephone number, presented in a LTR context.
Ltr-base-direction.png
And now, exactly the same sequence, just the surrounding base context has changed to RTL.
Ltr-base-direction.png`,
    `For passing around strings this is not an issue, since characters are stored in logical order. It is only an issue when the text needs to be eventually displayed to a human. The display algorithm needs to know the paragraph direction before it starts to display the string.`,
    `This document is mostly about cases where the first strong directional character does not indicate the paragraph direction that the originator of the string intended.`,
    `Sometimes finding the first strong character is actually misleading. Take a string typed into an HTML form input field such as the following. The image below represents what the user sees as they type, and what they expect others to see later. Imagine this as something like a tweet beginning with a hash tag.

    Rtl hash he.png`,



    `If the consumer of this string were to assume that the text needs a LTR base direction, based on detecting the first strong directional character, the result would be incorrect when displayed to another human later.`,
    `Typically, the information that indicates that this phrase should be displayed using a RTL paragraph direction is not contained in the string when the form is submitted. It may be contained in the computed direction of the form, which may be set directly on the form itself, via markup or via context menu selections or keystrokes, or it may be inherited from a parent element. (It can be passed to the receiver using the dirname attribute, but that is carried as separate information.)`
];
let main1=document.getElementById('main1')
let input=document.getElementById('input')
let p=document.getElementsByClassName('paragraph')
let generate=()=>{
    if(isNaN(input.value) || input.value>14 || input.value<0){
        let random=Math.floor(Math.random()*text.length)
        console.log(random)
        p[0].innerHTML=`${text[random]}`
    }
    else{
        let data=text.slice(0,input.value)
        let para=data.map(
            (d)=>{
                return `<p class="paragraph">${d}</p>`
            }
        )
        main1.innerHTML=para.join('')
    }
}
