//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
company = {
	name: "ACME Corp",
	address: "Nowhere st",
	products: {
		shirts: {
			colors: ["red", "green", "blue"],
		},
		socks: {
			colors: ["cyan", "magenta", "yellow"],
		},
	},
};

var getShirtsColorsAmount = (company) => {
	const { colors } = company.products.shirts;
	return colors.length;
};

console.log(getShirtsColorsAmount(company));
