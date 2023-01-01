// lexical scope 
//const myVar = "value1";

//function myApp(){
    

  //  function myFunc(){
//      const myVar = "value59";
  //      const myFunc2 = () =>{
  //          console.log("inside myFunc", myVar);
   //     }
  //      myFunc2();
//}


  //  console.log(myVar);
  //  myFunc();
//}
//myApp();





// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "saffwan";
//     console.log(firstName);
// }

// console.log(firstName);

//function myApp(){
 //if(true){
 //var firstName = "saffwan";
 //console.log(firstName);
 //}

//if(true){
 //console.log(firstName);
// }
 // console.log(firstName);
//}

//myApp();



//


// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

//function addTwo(a,b=0){
 // return a+b;
//}

//const ans = addTwo(4, 8);
//console.log(ans);





// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

//function addAll(...numbers){
  //let total = 0;
  //for(let number of numbers){
   //   total = total + number;
  //}
 // return total;
//}

//const ans = addAll(4,5,4,2,10);
//console.log(ans);


// param destructuring 

// object 
// react 

//const person = {
 // firstName: "harshit",
 // gender: "male",
 // age: 500
//}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


//function printDetails({firstName, gender, age}){
  //c/onsole.log(firstName);
  //console.log(gender);
 // console.log(age);
//}

//printDetails(person);


