import "./LoginPage.css"
function LoginPage() {
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
 console.log(usernameInput);
 console.log(passwordInput);
    // Check if username exists
    for (let i = 0; i < userDatabase.length; i++) {
      if (
        usernameInput === userDatabase[i].username &&
        passwordInput === userDatabase[i].password
      ) {
        console.log(usernameInput + " is logged in"); 
  
        alert("Login Successful");
        window.location.href = "/"; // Redirect to home.html
        return; 
      }
    }
    // If no matching user is found
    alert("User Not Found or Invalid Password. Try Again");
  }
  return (
    <div className="container">
        <h2>Login</h2>
        <form action="#" method="POST" id="loginForm">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <button id="loginBtn" onClick={login} type="button">Login</button>
        </form>
    </div>
    
  )
}

export default LoginPage