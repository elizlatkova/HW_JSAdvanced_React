// ---------------------------------- Task 1 ---------------------------------- //
/* DESCRIPTION:
   Write a function that creates and returns an object with methods that
   operate on a private variable (count, initially set to 0)
*/

// YOUR CODE HERE

function createCounter() {
    const counter = {};
    counter.count = 0;
    counter.getCount = function () {
        return counter.count;
    };
    counter.increment = function () {
        counter.count +=1;
    };
    counter.decrement = function () {
        counter.count -=1;
    }
    return counter
}


// TEST
const counter = createCounter();
console.log(counter.getCount()); // Expected output: 0
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Expected output: 1