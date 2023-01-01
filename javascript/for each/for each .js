// important array methods 

const numbers = [4,2,5,8];

 function myFunc(number, index){
     console.log(`index is ${index} number is ${number}`);
 }

 numbers.forEach(function(number,index){
     console.log(`index is ${index} number is ${number}`);
 });

 numbers.forEach(function(number, index){
     console.log(number*3, index);
 })

const users = [
    {firstName: "saffwan", age: 23},
    {firstName: "ahmed", age: 21},
    {firstName: "syed", age: 22},
    {firstName: "ibrahim", age: 20},
]

users.forEach(function(user){
     console.log(user.firstName);
 });

 users.forEach((user, index)=>{
     console.log(user.firstName, index);
 })

 for(let user of users){
     console.log(user.firstName);
 }