let myDate  = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date("01-21-2024")
console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

//string interpolation
console.log(`The day is ${myDate.getDay()} and the time is ${myDate.getTime()}`)

//customisation using toLocaleString

myDate.toLocaleString('default',{
    weekday : "long",
     
})