document.addEventListener('DOMContentLoaded', function () {
    const shopNowBtn = document.getElementById("btn");
    const menuSection = document.getElementById("menu");

    shopNowBtn.addEventListener('click', function (event) {
      event.preventDefault();
      menuSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

function goToNextPage() {
const nextPageUrl = "http://127.0.0.1:5500/Learn%20More.html";
window.open(nextPageUrl, '_blank');
}
const Aboutbtn = document.getElementById("about-btn");
Aboutbtn.addEventListener("click", goToNextPage);

function openInNewTab(url) {
  window.open(url, '_blank');
}

const contactForm = document.getElementById('contact-form');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function(event) {
event.preventDefault();

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');


const name = nameInput.value;
const email = emailInput.value;
const number = numberInput.value;
const message = messageInput.value;

const queryString = `?name=${name}&email=${email}&number=${number}&message=${message}`;
// Open the info page with the query string in a new tab
window.open("info.html" + queryString, '_blank');
});


// shopping Cart

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Rs.${item.price}</span>
                <i class="fas fa-trash remove-item" data-index="${index}"></i>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += parseInt(item.price);
        });

        cartTotalContainer.textContent = `Total: Rs.${total}`;
        bindRemoveItemListeners(); // Call this function after updating the cart
    }

    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    function removeItem(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function bindRemoveItemListeners() {
        // Bind click event to all remove-item icons
        document.querySelectorAll('.remove-item').forEach(removeIcon => {
            removeIcon.addEventListener('click', (event) => {
                const index = parseInt(event.target.dataset.index);
                removeItem(index);
            });
        });
    }

    // Add event listeners to all add-to-cart buttons
    document.querySelectorAll('.fa-cart-shopping').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card-body');
            const name = card.querySelector('h3').textContent;
            const price = parseInt(card.querySelector('p').textContent.match(/\d+/)[0], 10);

            addToCart(name, price);
        });
    });
});

function toggleCart() {
    document.getElementById("sidePanel").classList.toggle("open");
}


// Rating Stars

  document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star i');

    stars.forEach(star => {
      star.addEventListener('click', setRating);
      star.addEventListener('mouseover', hoverRating);
      star.addEventListener('mouseout', resetRating);
    });

    function setRating(event) {
      const star = event.currentTarget;
      const rating = parseInt(star.getAttribute('data-value'));
      const starContainer = star.parentNode;

      starContainer.setAttribute('data-rating', rating);
      updateStars(starContainer);
    }

    function hoverRating(event) {
      const star = event.currentTarget;
      const starContainer = star.parentNode;
      const hoverValue = parseInt(star.getAttribute('data-value'));

      resetStars(starContainer);
      highlightStars(starContainer, hoverValue);
    }

    function resetRating(event) {
      const starContainer = event.currentTarget.parentNode;
      updateStars(starContainer);
    }

    function updateStars(starContainer) {
      const rating = parseInt(starContainer.getAttribute('data-rating'));

      resetStars(starContainer);
      highlightStars(starContainer, rating);
    }

    function resetStars(starContainer) {
      const stars = starContainer.querySelectorAll('i');

      stars.forEach(star => {
        star.classList.remove('fas');
        star.classList.add('far');
      });
    }

    function highlightStars(starContainer, rating) {
      const stars = starContainer.querySelectorAll('i');

      for (let i = 0; i < rating; i++) {
        stars[i].classList.remove('far');
        stars[i].classList.add('fas');
      }
    }
  });

