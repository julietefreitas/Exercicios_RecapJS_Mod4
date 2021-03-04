//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

data = [
	{
		name: "Butters",
		age: 3,
		type: "dog",
	},
	{
		name: "Lizzy",
		age: 6,
		type: "dog",
	},

	{
		name: "Red",
		age: 1,
		type: "cat",
	},
	{
		name: "Joey",
		age: 3,
		type: "dog",
	},
];

const doguitos = data.filter((ele) => {
	return ele.type == "dog";
});

const ageDogs = doguitos.reduce((acc, dog) => {
	return acc + dog.age;
}, 0);

console.log(doguitos);
console.log(ageDogs);
