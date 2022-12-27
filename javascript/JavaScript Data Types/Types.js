//There are different types of data that we can use in a JavaScript program. For example,

//const x = 5;
//const y = "Hello";
//Here,

//5 is an integer data.
//"Hello" is a string data


//There are eight basic data types in JavaScript. They are:

//Data Types	Description	Example
//String	represents textual data	'hello', "hello world!" etc
//Number	an integer or a floating-point number	3, 3.234, 3e-2 etc.
//bigInt	an integer with arbitrary precision	900719925124740999n , 1n etc.
//Boolean	Any of two values: true or false	true and false
//undefined	a data type whose variable is not initialized	let a;
//null	    denotes a null value	let a = null;
//Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');
//Object	key-value pairs of collection of data	let student = { };
//
//1.String is used to store text. In JavaScript, strings are surrounded by quotes:

//Single quotes: 'Hello'
//Double quotes: "Hello"
//Backticks: `Hello`
//For example,

//strings example
//const name = 'ram';
//const name1 = "hari";
//const result = `The names are ${name} and ${name1}`;
//console.log("ram: '+' : hari") 

//2....JavaScript Number
//Number represents integer and floating numbers (decimals and exponentials). For example,

const n = 3;
const Y = 3.433;
const m = 3e5 // 3 * 10^5

//const number1 = 3/0;
//console.log(number1); 

//const number2 = -3/0;
//console.log(number2); 

// strings can't be divided by numbers
//const number3 = "abc"/3; 
//console.log(number3); 
////3In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.

//A BigInt number is created by appending n to the end of an integer. For example,

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
//const result1 = value1 + 1n;
//console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
//const result2 = value2 + 1; 
//console.log(result2); 

//4..JavaScript Boolean
//This data type represents logical entities. Boolean represents one of two values: true or false.// It is easier to think of it as a yes/no switch For example,

//const Checked = true;
//const Counted = false;

//4..JavaScript undefined
//The undefined data type represents value that is not assigned. 
//let nam;
//console.log(nam);
//It is also possible to explicitly assign a variable value undefined. For example,

//let na = undefined;
//console.log(na); 
//JavaScript null
//5..In JavaScript, null is a special value that represents empty or unknown value. For example,

//const number = null;
//6.JavaScript Symbol
//This data type was introduced in a newer version of JavaScript (from ES2015).

//A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,

// two symbols with the same description

//const value3 = Symbol('world');
//nst value4= Symbol('hello');
//console.log(value3);
//
//7..JavaScript Object
//An object is a complex data type that allows us to store collections of data. For example,

//const student = {
//   firstName : 'saff',
// lastName  : null,
//   class: 10
//};
//console.log(student);
//
////
//
//
//8.  JavaScript Type
//It also means that a variable can be of one data type and later it can be changed to another data type. For example,

// data is of undefined type
//let data;

// data is of integer type
//data = 5;

// data is of string type
//data = "JavaScript Programming";




///8.1..JavaScript typeof
//
//const name = 'saff';
//typeof(name);
 //console.log(typeof(name));

// let y = 5;
 //typeof(y);
// console.log(typeof(y));

const a = null;
typeof(a);
console.log(typeof(a));