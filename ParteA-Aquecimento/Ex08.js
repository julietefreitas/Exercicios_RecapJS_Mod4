//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];

const arrayQuadrado = numbers.map((ele) => {
	return ele * 10;
});

console.log(arrayQuadrado);
