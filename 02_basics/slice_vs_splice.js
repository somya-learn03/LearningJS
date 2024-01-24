//slice,splice
//slice is like tuples in python, it is immutable.Splice is like lists in pyhton ,it is mutable.

const a1 = new Array("a","b","c","d")
const a2 = new Array(1,2,3,4)

console.log("A" , a1.slice(1,3))
console.log("Array after slice is" , a1)
console.log("B" , a1.splice(1,3))
console.log("Array after splice is" , a1)

