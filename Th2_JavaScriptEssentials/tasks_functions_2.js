// ---------------------------------- Task 2 ---------------------------------- //
/* DESCRIPTION:
   Create a function named 'calculateTotalPrice' that calculates the total price of items in a shopping cart.
   Each item in the cart is represented as an object with 'name' and 'price' properties.
   The function should take an array of items as input and return the total price.
*/

// YOUR CODE HERE
function calculateTotalPrice(shoppingCart) {
    let totalPrice = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        totalPrice += item['price'];
    }
    return totalPrice
}

// TEST
const shoppingCart = [
    { name: "T-shirt", price: 20 },
    { name: "Jeans", price: 50 },
    { name: "Shoes", price: 80 }
];
console.log(calculateTotalPrice(shoppingCart)); // Expected output: 150
//success