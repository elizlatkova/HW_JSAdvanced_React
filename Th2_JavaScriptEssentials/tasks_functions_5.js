// ---------------------------------- Task 5 ---------------------------------- //
/* DESCRIPTION:
    Write a function named `customFilter` that mimics the behavior of the JavaScript
    array method `Array.prototype.filter`. Your `customFilter` function should take two
    arguments: an array and a callback function that takes one argument (`x`) and
    returns `true` if the argument is positive (i.e.x > 0) and `false` if `x` is negative. The customFilter function should return a new array containing only the elements for which the callback function returns `true`.
*/

// YOUR CODE HERE
// Define customFilter function
function customFilter(arr, callbackFunc) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (callbackFunc(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}

// Define isPositive function
function isPositive(number) {
    return number>=0 ? true : false;
}


// TEST
const nums = [-1, 1, -2, 3, 4];
const positiveNumbers = customFilter(nums, isPositive);
console.log(positiveNumbers); // Expected output: [1, 3, 4]