const score = 400
const balance = new Number(100)
console.log(balance)

console.log(balance.toFixed(2))

const hundreds = 10000000
console.log(hundreds.toLocaleString())

console.log("-------------------------------------------")

console.log(Math)

console.log(Math.abs(-100))
//console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(1,5,3,8))
console.log(Math.max(3,9,7,1))

console.log("--------Random--------")

console.log("Value b/w 1 and 10")
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log("Value b/w 10 and 20")
console.log(Math.floor(Math.random() * (max-min + 1) + min))