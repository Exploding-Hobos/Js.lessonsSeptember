//Iterating
let food = ['Pecan Pie', 'Shrimp', 'Quesadila', 'Cheese cake', 'Hotdog'];


// food.forEach(f => {console.log(f)})
food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})

let movies = ['Stuff I: Who is Stuff?', 'Stuff II: The Rise of Stuff', 'Stuff III: The Falling of Stuff', 'Stuff IV: Trails and Redemption of Stuff']

movies.forEach((movies, number) => {
    console.log(movies);
    console.log(number);
})

movies.push('Stuff V: Stuff');
console.log(movies);

movies.splice(0, 1, 'The REAL Stuff: Who is Stuff?');
console.log(movies);

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73)
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})
console.log(newArray);