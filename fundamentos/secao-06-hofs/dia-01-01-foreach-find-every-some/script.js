const newEmployees = (retorno) => {
  const employees = {
    id1: retorno('Guilherme Voleck'),
    id2: retorno('Larissa Favoretto'),
    id3: retorno('Emerson Voleck'),
  }
  return employees;
};


const adicionandoFuncionarios = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().replace(' ', '_');
    return `${email}@trybe.com`
}


console.log(newEmployees(adicionandoFuncionarios));



const testandoGanhador = (myNumber, sorteado) => myNumber === sorteado;

const numeroSorteado = (myNumber, callback) => {
    const sorteado = Math.floor(Math.random() * 5);

    return callback(myNumber, sorteado) ? 'Ganhou': 'Perdeu';
}

console.log(numeroSorteado(4, testandoGanhador));

//

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// 

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  const authorBornIn1947 = () => {
    return books.find((book) => book.author.birthYear === 1947).author.name;
  }

  const smallerName = () => {
    let nameBook;
    // escreva aqui o seu código
  
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    });
    return nameBook;
  }

//const expectedResult = false;

const everyoneWasBornOnSecXX = () => {
  return books.every((book) => (
    book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  ));
}

//const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

//const expectedResult = false;

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}