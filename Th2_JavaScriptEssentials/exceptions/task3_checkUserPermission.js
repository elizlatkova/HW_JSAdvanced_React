// ---------------------------------- Task 3 ---------------------------------- //
/**
 * DESCRIPTION:
 * Create a function `checkUserPermission` that takes an object with a `role` property and a string representing
 * the required role. If the object's role matches the required role, return "Access granted". If not, throw an
 * Error with the message "Access denied". Use try-catch to handle the error and return the error's message.
 */

// YOUR CODE HERE
function checkUserPermission(obj, requiredRole) {
    try {
        if (obj.role == requiredRole) {
            return "Access granted";
        } else {
            throw new Error("Access denied");
        }
    } catch (e) {
        return e.message;
    }
}

// TEST:
console.log(checkUserPermission({ role: "admin" }, "admin")); // EXPECTED OUTPUT: "Access granted"
console.log(checkUserPermission({ role: "guest" }, "admin")); // EXPECTED OUTPUT: "Access denied"