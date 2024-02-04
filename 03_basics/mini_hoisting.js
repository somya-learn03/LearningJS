console.log(addOne(5))               //here it wont throw error
function addOne(num){
    return num + 1
}


//console.log(addTwo(5));         here it will throw error
const addTwo = function(num){
    return num + 2 
}


//This is the concept called hoisting.