//Q34:// program to sort words in alphabetical order

// take input
const string = "my name is saffwan ";

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}
    