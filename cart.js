const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItemsContainer.innerHTML += `
      <div class="book-card">
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>By ${item.author}</p>
        <p>Price: $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });
  cartTotalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert('Thank you for your purchase!');
  localStorage.removeItem('cart');
  renderCart();
}

renderCart();
