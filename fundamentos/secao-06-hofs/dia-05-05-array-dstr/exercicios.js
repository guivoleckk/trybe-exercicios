//EX 1
const myList = [5, 2, 3];

const swap = ([a, b, c]) => [c, b, a];

//EX 2
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({ name, brand, year });

//EX 3
const greet = (name, msg = 'Hi') => `${msg} ${name}`;

// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

//EX 4

const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
  const [ student1, [ student2, student3 ], [student4, student5 ] ] = moreStudents;

console.log(student1, student2, student3, student4, student5);