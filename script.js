// script.js

// Sample cart array to hold cart items
let cart = [];

// Function to add items to the cart
function addToCart() {
    // Sample product object
    const product = {
        name: 'Gold Necklace',
        price: 299.99,
        quantity: 1
    };

    cart.push(product);
    alert('Product added to cart!');
}

// Function to display cart items on cart.html
function displayCart() {
    const cartTable = document.querySelector('.cart table');

    cart.forEach(item => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price.toFixed(2)}`;

        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);

        cartTable.appendChild(row);
    });
}

// Function to proceed to checkout
function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout functionality
}

// Call displayCart when cart.html is loaded
if (window.location.pathname.endsWith('cart.html')) {
    displayCart();
}
