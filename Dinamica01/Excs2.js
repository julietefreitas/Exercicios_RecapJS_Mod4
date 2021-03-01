const fetch = require("node-fetch");

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		for (let i in response.meals) {
			if (i <= 9) {
				console.log(response.meals[i].strMeal);
			}
		}
	});
