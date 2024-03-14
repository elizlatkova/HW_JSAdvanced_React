// ---------------------------------- Task 4 ---------------------------------- //
/* DESCRIPTION:
Write a function named `customMap` that mimics the behavior of the JavaScript
array method `Array.prototype.map`. Your `customMap` function should take two
arguments: an array and a callback function that applies a specific operation
to each element in the array (like square, i.e. takes `x` and returns `x` * `x`).
The customMap function should return a new array with the
results of calling the callback function on every element in the input array.
*/

// YOUR CODE HERE
// Define customMap function
function customMap(arr, callbackFunc) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        newArray[i] = callbackFunc(element);
    };
    return newArray
}

// Define square function
function square(number) {
    return number * number
}

// TEST
const nums = [1, 2, 3, 4];
const squared = customMap(nums, square);
console.log(squared);  // Expected output: [1, 4, 9, 16]