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

// Practice 5
let time = '7:00 PM'
let isHungry = true

if (time === '7:30 AM' && isHungry){
    console.log('Time for breakfast!')
} else if (time === '12:00 PM' && isHungry){
    console.log('Time for lunch!')
} else if (time === '7:00 PM' || time === '8:00 PM' && isHungry){
    console.log('Time for dinner!')
} else if (isHungry){
    console.log('Time for a snack!')
} else {console.log('Have a cookie anyway!')}

// Practice 6
let grade = 86

if (grade >= 0 && grade <= 69) {
    console.log('You got an F')
} else if (grade >= 70 && grade <= 76){
    console.log('You got a D')
} else if (grade >= 77 && grade <= 84){
    console.log('You got a C')
} else if (grade >= 84 && grade <= 92){
    console.log('You got a B')
} else if (grade >= 93 && grade <= 100){
    console.log('You got an A')
}