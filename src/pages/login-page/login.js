const userDatabase = [
  {
    username: "user1",
    password: "password1",
  },
  {
    username: "user2",
    password: "password2",
  },
];
function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  // Check if username exists
  for (let i = 0; i < userDatabase.length; i++) {
    if (
      usernameInput === userDatabase[i].username &&
      passwordInput === userDatabase[i].password
    ) {
      console.log(usernameInput + " is logged in"); 

      alert("Login Successful");
      window.location.href = "home.html"; // Redirect to home.html
      return; 
    }
  }
  // If no matching user is found
  alert("User Not Found or Invalid Password. Try Again");
}