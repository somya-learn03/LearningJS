//singleton and constructors
//const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object
tinderUser.id = "1a2b3c"
tinderUser.name = "cookie"
tinderUser.isLoggedIn = false

const bumbleUser = {
    email : "lily@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "somya",
            lastname : "singh"
        }
    }
}

console.log(bumbleUser.fullname.userfullname.lastname)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj4 = {5:"e" , 6:"f"}

//const obj3 = {obj1 , obj2}
const obj3 = Object.assign(obj1 , obj2 , obj4)  //obj1 is source and obj2,obj4 are target
console.log("merged object : ", obj3)
console.log("source after merge : " , obj1)
console.log("targets after merge : " , obj2 , obj4)

console.log("if taget and merged are same : " , obj1 === obj3)

//best way is to use spread operator

const fruits = {1:"Apple" , 2:"Strawberry"}
const snacks = {3:"Nachos" , 4:"Pasta"}
const mergedObj = {...fruits,...snacks}
console.log("merged using spread operator : ",mergedObj)

console.log("source after merge using spread operator : " , fruits)
console.log("targets after merge usong spread operator : " , snacks )

console.log("keys are : " , Object.keys(mergedObj))
console.log("values are : " , Object.values(mergedObj));
//console.log("entries are : " , Object.entries(mergedObj));

console.log(tinderUser.hasOwnProperty('Address')) //to check existing values
