// ---------------------------------- Task 2 ---------------------------------- //
/**
 * DESCRIPTION:
 * Implement a function named `retryOperation` that attempts to execute 
 * a given operation (a function passed as an argument).
 * The operation should be retried up to 3 times if it throws an error. 
 * If after 3 attempts the operation still fails,
 * catch the error and log "Operation failed after 3 attempts".
 */

// YOUR CODE HERE

function retryOperation(func) {
    let countErrors = 0;
    let maxErrors = 3;
    while (true) {
        try {
            func();
            break;
        } catch (error) {
            if (++countErrors == maxErrors) {
                throw new Error("Operation failed after 3 attempts");
            }

        }
    }

}
// TEST:
retryOperation(() => {
    throw new Error("Test Error");
}); // EXPECTED OUTPUT: "Operation failed after 3 attempts"