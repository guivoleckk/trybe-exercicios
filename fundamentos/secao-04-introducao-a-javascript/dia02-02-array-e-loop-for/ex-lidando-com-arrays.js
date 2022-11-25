let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// 1 - IMPRIMINDO TODOS OS VALORES DO ARRAY
for(let i = 0; i < numbers.length; i+=1){
    console.log('EXERCICIO 1', numbers[i]);
};


// 2 - SOMANDO OS ARRAYS ITERADOS
let apoioSoma = 0;
for (let index = 0; index < numbers.length; index+= 1){
    apoioSoma = apoioSoma + numbers[index];
};
console.log('EXERCICIO 2', apoioSoma);
// 3 - CALCULANDO A MEDIA ARITMETICA 
let calculandoMediaAritmetica = apoioSoma / numbers.length;
console.log('EXERCICIO 3', calculandoMediaAritmetica);

// 4 - DESCUBRA SE A MÉDIA CALCULADA ANTERIORMENTE É MAIOR OU MENOR QUE 20
console.log('EXERCICIO 4');
if(calculandoMediaAritmetica > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20')
};

// 5 - DESCUBRA O MAIOR VALOR CONTIDO NO ARRAY

let recebeMaiorValor = 0;
for (let z = 0; z < numbers.length; z+=1){
    let apoioMaiorNumero = numbers[z];
    if(apoioMaiorNumero > recebeMaiorValor){
        recebeMaiorValor = apoioMaiorNumero
    };
};
console.log('EXERCICIO 5', recebeMaiorValor);

// 6 - DESCUBRA SE HÁ ALGUM VALOR ÍMPAR CONTIDO NO ARRAY
let numerosImpares = 0;
for (let j = 0; j < numbers.length; j+=1){
    if(numbers[j] % 2 !== 0){
        numerosImpares = numerosImpares + 1
    } else{
        console.log('nenhum valor ímpar encontrado');
    };
};
console.log('EXERCICIO 6', numerosImpares);

// 7 - DESCUBRA O MENOR VALOR CONTIDO NO ARRAY

let recebeMenorValor = 3;
for (let x = 0; x < numbers.length; x+=1){
    let apoioMenorNumero = numbers[x];
    if(apoioMenorNumero < recebeMenorValor){
        recebeMenorValor = apoioMenorNumero
    };
};
console.log('EXERCICIO 7', recebeMenorValor);

//8 - CRIANDO UM ARRAY 1 ATÉ O 25
array = []
for(let k = 1; k <= 25; k+= 1){
    array.push(k)
}
console.log('EXERCICIO 8', array)

//9 - UTILIZANDO O ARRAY CRIADO, FAÇA UMA DIVISÃO POR 2 DE TODOS OS NÚMEROS

for (let k = 0; k < array.length; k+=1){
    console.log('EXERCICIO 9',array[k] / 2)
}