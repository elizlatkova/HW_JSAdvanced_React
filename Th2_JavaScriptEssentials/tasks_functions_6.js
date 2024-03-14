// ---------------------------------- Task 4 ---------------------------------- //
/* DESCRIPTION:
   Implement a function named 'memoize' that takes a function with a single
   argument as input and returns a memoized version of that function.
   The memoized function should internally maintain a cache, typically an object,
   to store the results of previous function calls mapped to their input arguments.
   When invoked with a new argument, the memoized function first checks if the result
   for that argument exists in the cache. If found, it returns the cached result
   without invoking the original function. If not found, the original function is called
   with the argument, and its result is stored in the cache before being returned.
   To implement memoization, the memoized function can use closure to create and update
   the cache, ensuring its persistence between function calls. The argument passed
   to the memoized function serves as the key for accessing and storing values in the cache.
   This optimization technique enhances the performance of functions with deterministic behavior
   and is particularly useful for scenarios where the same function is repeatedly called
   with identical arguments, such as recursive algorithms or dynamic programming solutions.
*/


// YOUR CODE HERE
const memoize = function (func) {
    let cache = {};
    return function (num) {
        if (num in cache) {
            console.log('use cache');
            return cache[num];
        } else {
            console.log('calculate fib');
            let result = func(num);
            cache[num] = result;
            //console.log(cache);
            return result
        }
    }
}

//1,1,2,3,5,8,13, ...
// TEST
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // Expected output: 55
console.log(memoizedFibonacci(10)); // Expected output: 55 (calculated efficiently with memoization)
