// ---------------------------------- Task 7 ---------------------------------- //
/* DESCRIPTION:
Implement a function `compose` that takes two functions as arguments and
returns a new function that, when called, calls the first function,
passes its result to the second function, and returns the result of the second function.
*/

// YOUR CODE HERE
//Define compose function
function compose(func1, func2) {
    return function (number) {
        return func2(func1(number));
    }
}

// Define double and increment functions
function double(number) {
    return 2 * number;
}
function increment(number) {
    return ++number;
}

// TEST
const doubleThenIncrement = compose(double, increment);
console.log(doubleThenIncrement(3)); // Expected output: 7