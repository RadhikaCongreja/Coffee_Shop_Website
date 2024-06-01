
const searchTermInput = document.getElementById('search-term');
const findButton = document.getElementById('find-btn');

findButton.addEventListener('click', function() {
  const searchTerm = searchTermInput.value.toLowerCase(); // Make search term case-insensitive

  // Clear any previous highlights
  const highlightedElements = document.querySelectorAll('.highlight');
  for (let element of highlightedElements) {
    element.classList.remove('highlight');
  }

  if (searchTerm) {
    const searchableElements = document.querySelectorAll('.searchable'); // Target specific elements
    for (let element of searchableElements) {
      const textContent = element.textContent.toLowerCase();
      if (textContent.indexOf(searchTerm) !== -1) {
        element.classList.add('highlight');
      }
    }
  }
});

// // Optional CSS to style highlighted elements (e.g., background color)
// .highlight {
//   background-color: yellow;
// }


const cartBtn = document.getElementById('cart-btn');
const floatingCart = document.getElementById('floating-cart');
const closeCartBtn = document.getElementById('close-cart');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartItemsList = document.getElementById('cart-items-list');
const checkoutBtn = document.getElementById('checkout-btn');

let cartItems = []; // Array to store cart items

// Function to add item to cart
function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  updateCart();
}

// Function to update cart display
function updateCart() {
  cartCount.innerText = cartItems.length;
  cartTotal.innerText = `Rs.${cartItems.reduce((acc, item) => acc + item.price, 0)}`;

  cartItemsList.innerHTML = ''; // Clear previous items
  for (let item of cartItems) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${item.name}</p>
      <span>Rs.${item.price}.00</span>
      <button class="btn btn-sm btn-danger remove-item-btn" data-item-name="${item.name}">Remove</button>`;
    cartItemsList.appendChild(cartItem);
  }
}

// Event listener for adding items to cart (assuming click event on elements with "add-to-cart" class)
const addToCartBtns = document.querySelectorAll('.add-to-cart');
for (let addToCartBtn of addToCartBtns) {
  addToCartBtn.addEventListener('click', function() {
    const itemName = this.dataset.itemName;
    const price = parseFloat(this.dataset.price); // Parse price to a number
    addToCart(itemName, price);
  });
}

// Event listener for closing the cart
closeCartBtn.addEventListener('click', function() {
  floatingCart.classList.remove('active');
});

// Event listener for "Remove Item" buttons (assuming click event)
cartItemsList.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-item-btn')) {
    const itemName = event.target.dataset.itemName;
    removeFromCart(itemName);
  }
});

// Function to remove item from cart
function removeFromCart(itemName) {
  cartItems = cartItems.filter(item => item.name !== itemName);
  updateCart();
}

// Optional: Initial check for existing cart items in local storage
const storedCartItems = localStorage.getItem('cartItems');
if (storedCartItems) {
  cartItems = JSON.parse(storedCartItems);
  updateCart();
}

const addCartBtns = document.querySelectorAll('.add-to-cart-btn');
for (let addToCartBtn of addCartBtns) {
  addToCartBtn.addEventListener('click', function() {
    const itemName = this.dataset.itemName;
    const price = parseFloat(this.dataset.itemPrice); // Parse price to a number
    addToCart(itemName, price);
  });
}





    document.addEventListener('DOMContentLoaded', function () {
      const starsContainer = document.querySelectorAll(".star");

      starsContainer.forEach(function (container) {
        const stars = container.querySelectorAll(".fa-star");
        stars.forEach(function (star, index) {
          star.addEventListener('click', function () {
            const rating = index + 1;
            console.log('Selected rating:', rating);
            // Toggle checked class for clicked star and stars before it
            stars.forEach(function (s, i) {
              if (i < rating) {
                s.classList.add('fa-checked');
              } else {
                s.classList.remove('fa-checked');
              }
            });
            // You can add further logic here, like sending the rating to your backend server.
          });
        });
      });
    });

/* 

.floating-cart {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: none; /* Initially hidden 
}

.floating-cart.active {
  display: block;
}

.cart-items {
  max-height: 200px;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
} 
*/
