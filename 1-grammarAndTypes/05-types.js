/*
Types
*/

//Booleans

let on = true;
console.log(on); //output ===> true

let off = false;
console.log(off); //output ===> flase

//boolean can represent: true/false, on/off, yes/no

//null
/*
Null = empty value(not 0; not undefined)

It is like an empty container; nothing is it but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

//Undefined
/*
Undefined = no value assigned (not even an empty container)

Undefined is not an error
*/


let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

/* Think of undefined and null as packages in UPS
null --> package deliberately sent out from UPS as empty
undefined --> package that was forgotten, or a package that not yet been used
*/

//Numbers
let degress = 65;
console.log(degress);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let anotherNum = 0.2 + 0.1;
console.log(anotherNum);

let num = 0.3;
console.log(num);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);

//Strings
//Strings = any value within quotes; spit out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //number
console.log(second); //string


console.log(typeof first);
console.log(typeof second);

//what is going on here?!?!
// + --> addition when given 2 numbers, concatenation when given 2 strings

let third = 1050 + '100';
console.log(third);

//Challenage:
let firstName = "Christian";
let lastName = "Johnson";
let houseNumber = 3205;
let street = "S Pennslyvania St."
let city = "Indianapolis"
let state = "Indiana"
let zipcode = 46227;

let address = firstName + " " + lastName + " " + houseNumber + " " + street + " " + city + " " + state + " " + zipcode;
console.log(address);

//Objects
/*
What is an Object?

a container that can hold multiple datatypes

denoted by {}
has keys and values (color (key): 'blue' (value)), separated with a colon
Each key separated with a coma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays
/*
Arrays are great for lists

denoted by []
have values separated by commas -> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true];

console.log(burritos);
console.log(typeof burritos);