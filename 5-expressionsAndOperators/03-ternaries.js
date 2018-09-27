// Ternaries

var x = 6;

(x > 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0")

if (x > 0) {
    console.log("greater")
} else {
    console.log("lesser")
}

let x = 10;

(x == 0) ? console.log("x equals 0") : (x < 0) ? console.log("x is less than 0") : console.log("x is greater than 0")



let age = 30;

(age >= 25) ? console.log("Yay! You can rent a car!") 
: (age >= 21) ? console.log("Yay! You can drink!") 
: (age >= 18) ? console.log("Yay! You can vote!") 
: console.log("Sorry, you're too young to do anything fun.");

let yep = -8;
(yep < 0 && yep > -10) ? console.log("yep is between 0 and -10") : (yep > 0) ?
console.log("yep is greater than 0") : console.log("yep is greater than 0");