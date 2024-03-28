//Given is the next array of numbers: [1,2,3,4,5,6,7,8,9,10]
//Write a program which will output in the console the sum of the squares of even numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareEven = arr
    .filter(num => num % 2 == 0)
    .reduce((acc, num) => acc + num ** 2, 0)
console.log(squareEven);