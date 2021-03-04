//Utilizando um operador clone o objeto c​lothes
const clothes = {
	pants: { colors: ["black", "blue"] },
	shirts: { colors: ["white", "red"] },
	socks: { colors: ["beige", "gray"] },
};

const clothesTwo = { ...clothes };

console.log(clothesTwo);
