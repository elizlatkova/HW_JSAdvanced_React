// TASK: getCityNameWithMinimalPopulation
// Implement findMinPopulationCityName function, so that it will return the
// name of the city with minimum population
const cities = [
    { name: 'Sofia', population: 1_236_000 },
    { name: 'Plovdiv', population: 343_424 },
    { name: 'Burgas', population: 202_766 },
    { name: 'Varna', population: 335_177 },
];

function findMinPopulationCityName(cities) {
    //YOUR CODE HERE
    let populations = cities.map(city => city.population);
    let minPopulation = Math.min(...populations);
    let cityMinPopulation = cities.filter(city => city.population == minPopulation);
    return cityMinPopulation[0].name
}
// TEST:
const minCityName = findMinPopulationCityName(cities);
console.log(minCityName);
// EXPECTED OUTPUT:
// 'Burgas'