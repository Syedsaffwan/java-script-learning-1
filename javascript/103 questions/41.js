//Q41:JavaScript Program to Remove a Property from an Object


// creating an object
const student = { 
    name: 'Saffwan',
    age: 22,
    hobbies: ['reading', 'games', 'swimming'],
    greet: function() {
        console.log('Hello');
    },
    score: {
        maths: 65,
        science: 80
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];

console.log(student);