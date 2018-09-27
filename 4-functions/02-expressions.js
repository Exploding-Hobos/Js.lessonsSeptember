/*
Expressions
*/
console.log(typeof hi); //expecting function, outpit: undefined
var hi = function hi() {
    console.log('hello');
}
hi(); //output -> 'hello'
