const user = {
    username : "somya" ,
    price : 99 ,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        //console.log(this)
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
//console.log(this)

function chai(){
    let someone = "itsy bitsy"
    console.log(this.someone)
}
chai()

const coffee = () => {
    let whoever = "floosy"
    console.log(this.whoever)
}
coffee()



