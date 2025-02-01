const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    alert('Login successful!');
    // Here you can add actual login logic, like API calls for authentication
  } else {
    alert('Please enter a username and password');
  }
});
