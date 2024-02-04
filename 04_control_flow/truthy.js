const userEmail = ""
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values => false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
// truthy values => "0" , 'false' , " " , [] , {} , function(){}

//to check if array is empty => check if its length is 0 or not

//to check if object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined
let val1;
//val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1)

let val2;
val2 = undefined ?? 100 ?? 200
console.log(val2)

//Ternary operator
// condition ? true : false

const coffeePrice = 350
coffeePrice >= 300 ? console.log("Costly") : console.log("Affordable")


