// ---------------------------------- Task 1 ---------------------------------- //
/**
 * DESCRIPTION:
 * Write a function `calculateArea` that takes the radius of a circle as input and calculates its area. If the input is
 * negative, throw a custom Error with the message "Radius cannot be negative". Catch this error in the caller function
 * and return null.
 */

// YOUR CODE HERE
function calculateArea(radius) {
    try {
        if (radius < 0) {
            let ErrorNegativeValue = new Error("Radius cannot be negative");
            throw ErrorNegativeValue;
        } else {
            return radius ** 2 * Math.PI
        }
    } catch (error) {
        return null
    }
}

// TEST:
console.log(calculateArea(5)); // EXPECTED OUTPUT: 78.53981633974483
console.log(calculateArea(-1)); // EXPECTED OUTPUT: null