// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

 //console.log(fruits.length);
//console.log(fruits[fruits.length-2]);
let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);







// use const for creating array

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits)