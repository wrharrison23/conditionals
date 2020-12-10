let likesToTravel = true
if (likesToTravel === true){
    console.log('Bon voyage!')
} else {
    console.log('Enjoy your couch!')
} // should be 'Bon voyage!'

let favoriteFood = 'Fried Chicken'
if (favoriteFood === 'fried pickles' || favoriteFood === 'pepperoni rolls'){
    console.log('Congratulations! You have excellent taste!')
} else {
    console.log('Clearly you have not tried fried pickles or pepperoni rolls.')
}

// Practice 1
if (1 + 1 > 5){
    console.log('True fact!')
} else {console.log('LIES!')}

if (4 * 5 <= 20){
    console.log('True fact!')
} else {console.log('LIES!')}

if (6 - 2 >= 0){
    console.log('True fact!')
} else {console.log('LIES!')}

// Practice 2
likesDogs = true
if (likesDogs){
    console.log("You're a dog person!")
} else {console.log("You're a cat person!")}

// Practice 3
birthYear = 1967
if (birthYear > 1966 && birthYear <= 1976) {
    console.log("You're a part of Generation X")
} else if (birthYear > 1977 && birthYear <= 1994) {
    console.log("You're a part of the Generation Y")
} else if (birthYear >= 1995 && birthYear <= 2012) {
    console.log("You're a part of Generation Z")
} else {console.log('Did you forget to enter your birth year?')}

// Practice 4
let personObject = {
    name: 'Bill',
    language: 'spanish',
}

if (personObject.language === 'english'){
    console.log(`Hello, ${personObject.name}!`)
} else if (personObject.language === 'spanish'){
    console.log(`Hola, ${personObject.name}!`)
} else if (personObject.language === 'french'){
    console.log(`Bonjour, ${personObject.name}!`)
}
