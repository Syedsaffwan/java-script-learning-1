//Q20:JavaScript Program to Make a Simple Calculator


// take the operator input
const operator = "+";"-";"*";"/"

// take the operand input
const number1 = parseFloat(5);
const number2 = parseFloat(6);

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);