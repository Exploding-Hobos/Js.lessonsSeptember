/*
CLASS FOR LOOPS
*/

//Loop Variations
//For statement
//Do while statement
//while statement
//labeled statement
//break statement
//continue statement
//for in statement
//for of statement

//counted from 0 - 9 by 1's
for(let i = 0; i < 10; i ++) {
    console.log(i);
}

//count from 0 - 20, by 2's
 for(let i = 0; i < 21; i = i + 2){
     console.log(i);
}

for (let i = 10; i >= 0; i -= 1) {
    console.log(i)
}

let name = 'christian'

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}


let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum = sum + i;
    console.log(sum)
}