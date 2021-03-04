//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];

const arrayQuadrado = numbers.map((ele) => {
	return ele * ele;
});

console.log(arrayQuadrado);
