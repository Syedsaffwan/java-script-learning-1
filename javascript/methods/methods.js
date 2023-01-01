// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "syed",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "saffwan",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "ahmed",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

// this function

// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();