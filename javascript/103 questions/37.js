//Q37:// program to create JavaScript object using object literal
const person = { 
    name: 'saffwan',
    age: 22,
    hobbies: ['reading', 'games', 'football'],
    greet: function() {
        console.log('Hello');
    },
    score: {
        maths: 65,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);