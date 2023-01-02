//Q47:// program to count the number of keys/properties in an object

const student = { 
    name: 'Saffwan',
    age: 22,
    hobbies: ['reading', 'games', 'football'],
    gender:"Male"
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    ++count;
}

console.log(count);