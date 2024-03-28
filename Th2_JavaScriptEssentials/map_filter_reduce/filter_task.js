// TASK: filter only cities which population is greater than 340_000
let cities = [
    {name: 'Sofia', population: 1_236_000},
    {name: 'Plovdiv', population: 343_424 },
    {name: 'Burgas', population: 202_766},
    {name: 'Varna', population: 335_177},
];

// YOUR CODE HERE:
let filtered = cities.filter(city => city.population>340_000);

// TEST:
console.log(filtered);

// EXPECTED OUTPUT:
// [
// 	{ name: 'Sofia', population: 1236000 },
// 	{ name: 'Plovdiv', population: 343424 }
// ]