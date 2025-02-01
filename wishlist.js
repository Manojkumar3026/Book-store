const wishlistItemsContainer = document.getElementById('wishlist-items');
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function renderWishlist() {
  wishlistItemsContainer.innerHTML = '';
  wishlist.forEach(item => {
    wishlistItemsContainer.innerHTML += `
      <div class="book-card">
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>By ${item.author}</p>
        <button onclick="removeFromWishlist(${item.id})">Remove from Wishlist</button>
      </div>
    `;
  });
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(item => item.id !== id);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  renderWishlist();
}

renderWishlist();
