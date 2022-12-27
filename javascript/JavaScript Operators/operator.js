//console.log("123");
//In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). For example,

//2 + 3; // 5

//JavaScript Operator Types
//Here is a list of different operators you will learn in this tutorial.

//1.Assignment Operators
//2.Arithmetic Operators
//3.Comparison Operators
//4.Logical Operators
//5.Bitwise Operators
//6.String Operators
//7.Other Operators

//JavaScript Assignment Operators
//Assignment operators are used to assign values to variables. For example,

//const x = 5;
//Here, the = operator is used to assign value 5 to variable x.

//Here's a list of commonly used assignment operators:

//Operator	Name	Example
//=	Assignment operator         	a = 7; // 7
//+=	Addition assignment     	a += 5; // a = a + 5
//-=	Subtraction Assignment  	a -= 2; // a = a - 2
//*=	Multiplication Assignment	a *= 3; // a = a * 3
///=	Division Assignment	        a /= 2; // a = a / 2
//%=	Remainder Assignment	    a %= 2; // a = a % 2
//**=	Exponentiation Assignment  	a **= 2; // a = a**2





//JavaScript Arithmetic Operators
//Arithmetic operators are used to perform arithmetic calculations. For example,

//const number = 3 + 5; // 8
//Here, the + operator is used to add two operands.

//Operator	 Name	 Example
//+      	Addition	x + y
//-	      Subtraction	x - y
//*	     Multiplication	x * y
///	        Division	x / y
//%      	Remainder	x % y
//++	Increment (increments by 1)	++x or x++
//--	Decrement (decrements by 1)	--x or x--
//**	Exponentiation (Power)	x ** y

//let x = 5;
//let y = 3;

// addition
//console.log('x + y = ', x + y);

// subtraction
//console.log('x - y =  ' , x-y);
// multiplication
//console.log('x * y = ', x * y);  // 15

// division
//console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
//console.log('x % y = ', x % y);   // 2

// increment
//console.log('++x = ', ++x); // x is now 6
//console.log('x++ = ', x++); // prints 6 and then increased to 7
//console.log('x = ', x);     // 7

// decrement
//console.log('--x = ', --x); // x is now 6
//console.log('x-- = ', x--); // prints 6 and then decreased to 5
//console.log('x = ', x);     // 5

//exponentiation
//console.log('x ** y =', x ** y);
//


//2.JavaScript Comparison Operators
//Comparison operators compare two values and return a boolean value, either true or false. For example,

//const a = 3, b = 2;
//console.log(a > b); // true 
//Run Code
//Here, the comparison operator > is used to compare whether a is greater than b.

//Operator	                           Description	                                                                                       Example
//==	        Equal to:     returns true if the operands are equal	                                           x == y
//!=	        Not equal to: returns true if the operands are not equal	                                      x != y
//===	         Strict equal to: true if the operands are equal and of the same type	                         x === y
//!==	        Strict not equal to: true if the operands are equal but of different type or not equal at all	x !== y
//>	        Greater than: true if left operand is greater than the right operand	x > y
//>=	        Greater than or equal to: true if left operand is greater than or equal to the right operand	x >= y
//<	       Less than: true if the left operand is less than the right operand	x < y
//<=	        Less than or equal to: true if the left operand is less than or equal to the right operand	x <= y
  


// equal operator
//console.log(2 == 2); // true
//console.log(2 == '2'); // true

// not equal operator
//console.log(3 != 2); // true
//console.log('hello' != 'Hello'); // true

// strict equal operator
//console.log(2 === 2); // true
//console.log(2 === '2'); // false

// strict not equal operator
//console.log(2 !== '2'); // true
//console.log(2 !== 2); // false


//3.JavaScript Logical Operators
//Logical operators perform logical operations and return a boolean value, either true or false. For example,

//const x = 5, y = 3;
//(x < 6) && (y < 5); // true
//Here, && is the logical operator AND. Since both x < 6 and y < 5 are true, the result is true.

//Operator	Description                                                             	    Example
//&&	Logical AND: true if both the operands are true, else returns false         	    x && y
//||	Logical OR: true if either of the operands is true; returns false if both are false	x || y
//!	Logical NOT: true if the operand is false and vice-versa.                               	!x



// logical AND
//console.log(true && true); 
//console.log(true && false); 

// logical OR
//console.log(true || false); 

// logical NOt
//console.log(!true); // false






//4.JavaScript Bitwise Operators
//bitwise operators perform operations on binary representations of numbers.

//Operator	Description
//&	          Bitwise AND
//|	          Bitwise OR
//^	         Bitwise XOR
//~	          Bitwise NO//T
//<<	         Left shift
//>>	     Sign-propagating right shift
//>>>	        Zero-fill right shift



//JavaScript String Operators
//In JavaScript, you can also use the + operator to concatenate (join) two or more strings.

//Example 4: String operators in JavaScript


// concatenation operator
//console.log('saffwan' + 'ahmed');


let a = 'JavaScript';
a = a + ' tutorial'
console.log(a);