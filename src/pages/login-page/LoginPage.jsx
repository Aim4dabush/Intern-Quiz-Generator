import React, { useState } from "react";
import RegisterPage from "../register-page/RegisterPage";
import "./LoginPage.css";

function LoginPage() {
  const [userDatabase, setUserDatabase] = useState([
    {
      username: "user1",
      password: "password1",
    },
    {
      username: "user2",
      password: "password2",
    },
  ]);

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function addUser(username, password) {
    const newUser = {
      username,
      password,
    };
    setUserDatabase((prevUsers) => [...prevUsers, newUser]);
  }

  function login(e) {
    e.preventDefault(); 

    const user = userDatabase.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
      alert("Login Successful");
      // TODO: Redirect to the quiz page or dashboard
    } else {
      alert("User Not Found or Invalid Password. Try Again");
    }
  }

  return (
    <div className="bodyLogin">
      <div className="container">
        <h2>Login</h2>
        <form action="#" method="POST" onSubmit={login} id="loginForm">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required value={usernameInput} onChange={e => setUsernameInput(e.target.value)} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required value={passwordInput} onChange={e => setPasswordInput(e.target.value)} />

          <button id="loginBtn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;