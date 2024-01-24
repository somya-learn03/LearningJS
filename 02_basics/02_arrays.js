const marvel_heros = ["thor","ironman","superman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log("push result" , marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
console.log("concat result" , all_heros)

/*push vs concat
When you push,it doesnt need to another array to hold merged arrays and the arrays are not merged as expected.
But in concal,it actually merges two arrays as we wanted but we need to hold
the resulting concat array into a variable.
*/

//Spread operator is better to use than concat

const all_new_heros = [...marvel_heros , ...dc_heros]
console.log("spread result" , all_new_heros)

const fucked_up_array = [1,2,3,["a","b","c"],4,["d","e",["f","g"]]]
const not_fucked_up = fucked_up_array.flat(4)
console.log("not_fucked_up" , not_fucked_up)

console.log("--------------------------------------------------")

console.log(Array.isArray("Somya"))
console.log(Array.from("Somya"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log((Array.of(score1,score2,score3)))