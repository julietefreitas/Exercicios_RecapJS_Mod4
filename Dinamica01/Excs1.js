const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function somaArray(arrayNovo) {
	const arraySpread = [...arrayNovo];
	const total = arraySpread.reduce(function (acc, ele) {
		return acc + ele;
	}, 0);
	return total;
}

console.log(somaArray(array));
