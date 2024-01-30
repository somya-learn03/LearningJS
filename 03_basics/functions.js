function loginUser(username = "dummy user"){
    if(username === undefined){   //i can also write !username
        console.log("Provide an input")
        return
    }
    return `${username} just logged in`
}

console.log(loginUser())
