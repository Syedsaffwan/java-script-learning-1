//Q24:JavaScript Program to Find LCM

// program to find the LCM of two integers

// take input
const num1 = 8;
const num2 = 5;

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}