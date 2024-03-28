/* ---------------------------------- TASK ---------------------------------- */
// Implement the groupProductsByCategory() function, which takes an array of
// products as input and returns an array of products grouped by category,
// as given in EXPECTED OUTPUT section bellow

// GIVEN:
const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

// EXPECTED OUTPUT:
// {
// 	music: [
// 		{ code: 1, name: 'product1', category: 'music', price: 1 },
// 		{ code: 4, name: 'product4', category: 'music', price: 4 }
// 	],
// 	books: [
// 		{ code: 2, name: 'product2', category: 'books', price: 2 },
// 		{ code: 3, name: 'product3', category: 'books', price: 3 }
// 	]
// }



/* ----------------------- Solution with forEach Loop - Long ----------------------- */
function groupProductsByCategory_ForEach_Long(products) {
	let groupedProducts = {};

	products.forEach(p => {
		if( !groupedProducts[p.category] ){
			groupedProducts[p.category]=[]
		}

		groupedProducts[p.category].push(p)
	});

	return groupedProducts;
}

/* -------------------------- Solution with Reduce - Long-------------------------- */
function groupProductsByCategory_Reduce_Long(products) {
	return products.reduce((acc, product) => {
		const category = product.category;

		if( !acc[category] ){
			acc[category] = []
		}
		acc[product.category].push(product);
		return acc;
	}, {});
}


/* ----------------------- Solution with forEach Loop - Short----------------------- */
function groupProductsByCategory_ForEach_Short(products) {
	let groupedProducts = {};

	products.forEach(p => {
		// next 2 lines do the same
		groupedProducts[p.category] = (groupedProducts[p.category] || []).concat(p)
		// groupedProducts[p.category] = [...(groupedProducts[p.category] || []), p]
	});

	return groupedProducts;
}

/* -------------------------- Solution with Reduce - Short-------------------------- */
function groupProductsByCategory_Reduce_Short(products) {
	return products.reduce((groupedProducts, p) => {
		// next 2 lines do the same
		groupedProducts[p.category] = (groupedProducts[p.category] || []).concat(p)
		// groupedProducts[p.category] = [...(groupedProducts[p.category] || []), p];
		return groupedProducts;
	}, {});
}


// TEST:
console.log( groupProductsByCategory_ForEach_Long(products), '\n' );
console.log( groupProductsByCategory_Reduce_Long(products), '\n' );
console.log( groupProductsByCategory_ForEach_Short(products), '\n' );
console.log( groupProductsByCategory_Reduce_Short(products), '\n' );