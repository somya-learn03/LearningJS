const user2 = {
    name : "Elmo" ,
    "last name" : "Muppet" ,
    age : 23 ,
    location : "DisneyLand" ,
    email : "elmo@disney.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["Sunday" , "Friday"]
}

user2.email = "muppets.disney.com"  //updating value
console.log(user2.email)

//you can lock the values too

// Object.freeze(user2)
// user2.name = "Kermit"
// console.log(user2);

