// Sample book data
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10, image: "5.jpg" },
  { id: 2, title: "1984", author: "George Orwell", price: 12, image: "34.jpg" },
  { id: 3, title: "The Great ", author: " J.Scott", price: 10, image: "4.jpg" },
  { id: 4, title: "The Amazing", author: "k.George ", price: 12, image: "book 1.jpg" },
  // Add more books as necessary...
];

// Render books on the page
const bookList = document.getElementById("book-list");

books.forEach(book => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>By ${book.author}</p>
      <p>Price: $${book.price}</p>
      <button onclick="addToCart(${book.id})">Add to Cart</button>
  `;
  bookList.appendChild(bookCard);
});

// Add to cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const book = books.find(b => b.id === id);
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Show a fun confirmation message
  const cartCount = cart.length;
  alert(`${book.title} added to cart! You have ${cartCount} item(s) in your cart.`);
}

// Implement search functionality
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", function() {
  const query = searchBar.value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
  
  bookList.innerHTML = ''; // Clear the current book list
  filteredBooks.forEach(book => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      bookCard.innerHTML = `
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>By ${book.author}</p>
          <p>Price: $${book.price}</p>
          <button onclick="addToCart(${book.id})">Add to Cart</button>
      `;
      bookList.appendChild(bookCard);
  });
});
