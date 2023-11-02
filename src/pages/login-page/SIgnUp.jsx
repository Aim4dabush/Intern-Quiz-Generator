import { useState } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import "C:\\VSCode Project Folder\\Intern-Quiz-Generator\\src\\pages\\login-page\\LoginPage.css";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)

      }).catch((error) => {
        console.log(error);
      });
    }

    return (
        <div className = "sign-in-container">
            <div className="bodyLogin">
      <div className="container" onSubmit={signUp}>
        <h2>Login</h2>
        <form action="#" method="POST" onSubmit={login} id="loginForm">
          <label htmlFor="username">Email</label>
          <input type="email" 
          id="username" 
          name="username" 
          required 
          value={usernameInput} 
          onChange={e => setUsernameInput(e.target.value)} />

          <label htmlFor="password">Password:</label>
          <input type="password" 
          id="password" 
          name="password" 
          required 
          value={passwordInput} 
          onChange={e => setPasswordInput(e.target.value)} />

          <button id="loginBtn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
        </div>
    )
}

export default SignUp