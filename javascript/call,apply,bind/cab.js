// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "saffwan",
//     age: 8,   
// }
// const user2 = {
//     firstName : "ahmed",
//     age: 9,
    
//}

// //apply
// about.apply(user1, ["football"]);
// const func = about.bind(user2, "swimming",);
// func();




const user1 = {
    firstName : "saffwan",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();