const name = "somya"
const repoCount = 50

//console.log(name + repoCount + " yumm ")

console.log(`Hi this is ${name} and repo count is ${repoCount}`)   //String interpolation

const gameName = new String('Flappy-bird')
console.log(gameName[4])
console.log(gameName.__proto__)
//charAt
//indexOf
//toUpperCase
//length

const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-12,7)
console.log(anotherString)
console.log("-------------------------------------------------------")

const stringThree = "  somya  "
console.log(stringThree)
console.log(stringThree.trim())

const url = "https//somya.singh/somya%20singh"
console.log(url.replace('%20' , '-'))
console.log(url.includes('flappy'))


console.log("-------------------------------------------------------")

const splitString = 'I love coffee'
const word = splitString.split(' ')
console.log(word)