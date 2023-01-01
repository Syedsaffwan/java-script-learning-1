// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('saffwan', 'hhhhh', 'syedsaffwan0@gmail.com', 9, "my address");
// const user2 = createUser('syed', 'ddddddd', 'syedsaffwan0@gmail.com', 19, "my address");
// const user3 = createUser('ahmed', 'ishh', 'syedsaffwan0@gmail.com', 17, "my address");
// console.log(user1.about());
// console.log(user3.about());



//solution using object/create

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('saffwan', 'ndjs', 'syedsaffwan0@gmail.com', 9, "my address");
const user2 = createUser('ahmed', 'kasx', 'syedsaffwan0@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'ndj', 'syedsaffwan0@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());