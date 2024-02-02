var c = 300             //global scope
let a = 4500
const b = 1000
if (true) {
    let a = 10
    const b = 20
    var c = 30          //block scope
    console.log("INNER a : ", a);
    console.log("INNER b : ", b);
    console.log("INNER c : ", c);
}

console.log("OUTER a : ", a);
console.log("OUTER b : ", b);
console.log("OUTER c : ", c);         //problem with var