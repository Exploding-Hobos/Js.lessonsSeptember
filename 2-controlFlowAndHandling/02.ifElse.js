//IF ELSE

weather = 75;

if (weather < 70) {
   console.log('Wear a jacket!');
} else {
   console.log('No jacket necessary!');
}

//challenge
let yourName = 'Cory'

if (yourName === 'Cory') {
   console.log(`Hello, my name is ${yourName}`)
} else {
   console.log('Hello, what is your name?')
}

//challenge2

let name = 'cOry';

let capitalize = function(string) {
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize(name));

let name = 'cOrY';

if (name[0] == name[0].toUpperCase()) {
   firstLetter = name[0] + name.slice(1).toLowerCase();
} else {
   otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
   console.log(otherLetters);
}

//challenge3

let age = 17

if (age >= 25) {
   console.log('Yay! you can rent a car!');
} else if (age >= 21) {
   console.log('Yay! You can drink!');
} else if (age >= 18) {
   console.log('Yay! You can vote!');
} else {
   console.log('Sorry, you\'re too young to do anything');
}