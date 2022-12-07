const name = 'Adriana';
const lastName = 'Soares';
console.log('Olá' + ',' + name + ' ' + lastName + '!');
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
  }
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));