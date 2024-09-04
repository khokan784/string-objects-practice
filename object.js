
// object

const person = {
    name: 'jasim uddin',
    age: 35,
    profession: 'developer',
    sallary: 25000,
    married: true,
    'fev place': 'rangamati',
}

// dot notation

// console.log(person);
// console.log(person.profession);
// const income = person.sallary;
// console.log(income);

// braket notation
// console.log(person['age']);
// const boyos = person['age'];
// console.log(boyos);
// console.log(person['fev place']);
// person.sallary = 50000;
// console.log(person);

// const keyName = 'profession';
// console.log(person[keyName]);

const probName = 'profession';
person[probName] = 'dev';
console.log(person);