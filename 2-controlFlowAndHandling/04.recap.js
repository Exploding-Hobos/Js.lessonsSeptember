/*
RECAP
*/
let stringExample ='string';
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;

//if else example
if (typeof conditionExample === 'string') {
    console.log('yep, it\'s a string');
} else if (typeof conditionExample ==='number') {
    console.log("yep, it's a number");
} else if (typeof conditionExample === 'boolean') {
    console.log("yep, it's a boolean")
}

console.log(typeof conditionExample);
//switch

switch (typeof conditionExample) {
    case "string":
        console.log("This is a string");
        break;
    case 'number':
        console.log("This is a number");
        break;
    default:
        console.log("This variable is not a string or number");
        break;
}

//ternary below
(typeof conditionExample === 'string') ? console.log('Our variable is a string') 
    : (typeof conditionExample === 'number') ? console.log('Our variable is a number')
    : (typeof conditionExample === 'undefined') ? console.log('Our variable is undefined')
    : console.log("This is our default case");


let FB = 15;

if (FB % 15 === 0) {
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz ');
}

switch (true){
    case (FB % 15 === 0):
        console.log("Fizz Buzz");
        break;
    case (FB % 5 === 0):
        console.log('Fizz');
        break;
    case (FB % 3 === 0):
        console.log('buzz');
        break;
}

(FB % 15 === 0) ? console.log('Fizz Buzz')
    : (FB % 3 === 0) ? console.log('Fizz')
    : (FB % 5 === 0) ? console.log('Buzz')
    : console.log('Try again bud');

