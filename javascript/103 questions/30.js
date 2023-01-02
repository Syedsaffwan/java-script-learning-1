//Q30:JavaScript Program to Find Factorial of Number Using Recursion
// program to find the factorial of a number

//factorial of n (n!) = 1 * 2 * 3 * 4.....n

function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

// take input from the user
const num = ('a positive number: ', 5);

// calling factorial() if num is positive
if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}