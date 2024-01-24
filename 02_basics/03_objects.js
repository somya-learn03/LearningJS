//object literals

const sym1 = Symbol("succulent")
const sym2 = Symbol("cactus")
const sym3 = Symbol("cactus")

const user1 = {
    name : "Somya" ,
    "last name" : "Singh" ,
    age : 23 ,
    sym1 : "Echeveria" , //incorrect syntax
    [sym2] : "Red Thorn" , //correct syntax
    [sym3] : "Red Thorn" ,
    location : "Gurgaon" ,
    isLoggedIn : false ,
    lastLoginDays : ["Sunday" , "Friday"]
}

//console.log(user1."last name");   //it will throw error
console.log(user1["last name"]);
console.log(user1.age);
console.log("sym1: " , typeof user1.sym1);
console.log("sym2: " , typeof user1[sym2]);
console.log("sym3: " , typeof user1[sym3]);
console.log("sym1: " , user1.sym1)
console.log("sym2: ", user1[sym2])
console.log("sym3: ", user1[sym3])
console.log("The user1 object is: ",user1)