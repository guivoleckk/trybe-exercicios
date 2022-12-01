//fatorial de 10

// let fatorial = 1;
// for (let i = 10; i > 0; i-=1){
//     fatorial *= i;
// }
// console.log(fatorial)

//inverter uma palavra

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

//escreva um algoritmo que imprima a menor e a maior palavra

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);



// maior numero primo entre 2 e 50

// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);