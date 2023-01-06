
function str(){
class Password {
    constructor() {
        console.log('Welcome to random password generator site')
        this.pass = ''
    }
    generatepassword(len) {
        let chars = 'abcdefghijklmnopqrstuvwxyz'
        let numbers = '1234567890'
        let special = "!@#$%^*-&()"
        if (len < 3) {
            alert('Your password is to weak')
        }
        else {
            let i = 0
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += special[Math.floor(Math.random() * special.length)]
                i += 3
            }
            this.pass=this.pass.substring(0,len)
            return this.pass
        }
    }
}
let p = new Password
let len=prompt('Please Enter Your password length')
if(len){
alert('Your password is '+p.generatepassword(len))
}
}
