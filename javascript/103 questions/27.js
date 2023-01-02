//Q27: program where the user has to guess a number generated by a program

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = 4;

    // take the input until the guess is correct
    while(number !== random) {
        number = 6;
    }

    // check if the guess is correct
    if(number == random) {
        console.log('You guessed the correct number.');
    }else{
        console.log("wrong guess")
    }

  }

// call the function
guessNumber();