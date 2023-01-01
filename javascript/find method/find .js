// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "saffwan"},
    {userId : 2, userName: "ahmed"},
    {userId : 3, userName: "syed"},
    {userId : 4, userName: "ahmed"},
    {userId : 5, userName: "123555"},
];

const myUser = users.find((user)=>user.userId===5);
console.log(myUser);