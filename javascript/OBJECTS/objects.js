// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Harshit",age:22};
//const person = {
    //name: "saffwan",
    //age: 22,
  //  hobbies: ["swimming", "football", "reading books"]
//}
//console.log(typeof person);

// how to access data from objects 
 //console.log(person["name"]);
//console.log(person["age"]);
//console.log(person.hobbies);

// how to add key value pair to objects
//person["gender"] = "male";
//console.log(person);





// difference between dot and bracket notaion
 const key = "email";
 const person = {
     name: "saffwan",
     age: 22,
     "person hobbies": ["swimming", "football", "reading books"]

 }

 console.log(person["person hobbies"]);
 person[key] = "syedsaffwan0@gmail.com";
 console.log(person);