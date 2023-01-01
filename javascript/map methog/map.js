// map method 
 const numbers = [3,4,6,1,8];

 const square = function(number){
     return number*number;
 }

const squareNumber = numbers.map((number, index)=>{
     return index;  
      });
 console.log(squareNumber);

const users = [
    {firstName: "saffwan", age: 23},
    {firstName: "ahmed", age: 21},
    {firstName: "ahmed", age: 22},
    {firstName: "ibrahim", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);