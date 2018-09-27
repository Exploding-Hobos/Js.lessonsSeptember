/*
INTRO TO ARRAYS

have [] brackets
can hold multiple datatypes
great for listing
*/

//overview/calling
let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ['Ryan', 'Iesha']];

console.log(typeof students); //obejcts
console.log(students[2]); //Rhys

console.log(`Hello ${students[6][1]}, you look nice today`);

let food = ['Pecan Pie', 'Shrimp', 'Quesadila', 'Cheese cake', 'Hotdog'];

// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }
for (let f of food) {
    console.log(f);
}
food.push('Pizza')
// console.log(food);
food.splice(1, 1, 'Bananas'); //first numl the index to start at, second num: number of things to remove, third num: replacement value
// console.log(food);
food.splice(2, 0, 'Sweet Potato Pie'); 
// console.log(food);
food.pop(); //removes the last value