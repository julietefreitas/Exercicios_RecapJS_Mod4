//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrayNovo = [...arr].filter((ele, index) => {
	return index > 0;
});

const arrayNovo2 = [...arr2].filter((ele, index) => {
	return index > 0;
});

console.log(arrayNovo);
console.log(arrayNovo2);
