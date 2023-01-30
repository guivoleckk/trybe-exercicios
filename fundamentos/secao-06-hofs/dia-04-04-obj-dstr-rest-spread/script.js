// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

const fruitSalad = (fruit, additional) => {
  // basta atribuirmos os dois arrays a uma constante usando o spread operator e retorná-lo ao final da função.
  const fruitSaladaWithAdditional = [...fruit, ...additional];
  return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {
  ...user,
  ...jobInfos,
};

// Aqui podemos desestruturar as chaves do objeto `userInfo` e então criar nossa mensagem diretamente pelas chaves desestruturadas.
const { name, age, nationality, profession, squad, squadInitials } = userInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);



const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
// utilize o spread operator para que ele passe cada array com as medidas do retângulo como um parâmetro da função.

console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});


const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

const alex = {
 name: 'Alex',
 age: 26,
 likes: ['fly fishing'],
 nationality: 'Australian',
};

const gunnar = {
 name: 'Gunnar',
 age: 30,
 likes: ['hiking', 'scuba diving', 'taking pictures'],
 nationality: 'Icelandic',
};


const personLikes = ({ name, age, likes }) => (
 `${name} is ${age} years old and likes ${likes.join(', ')}.`
);

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
  
  // escreva filterPeople abaixo

  
//...

const filterPeople = (arr) => {
    return people.filter(({ nationality, bornIn }) => {
      return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
    });
  }