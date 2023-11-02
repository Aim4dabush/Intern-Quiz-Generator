import { useState } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "C:\\VSCode Project Folder\\Intern-Quiz-Generator\\src\\pages\\login-page\\LoginPage.css";

const SignIn = ({ auth }) => { // Ensure to pass `auth` as a prop if it's needed for signInWithEmailAndPassword
    const [email, setEmail] = useState("test@testingemail.com");
    const [password, setPassword] = useState("password12345");

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        }).catch((error) => {
          console.log(error);
        });
    }

    return (
        <div className="sign-in-container">
            <div className="bodyLogin">
                <div className="container">
                    <h2>Login</h2>
                    <form action="#" method="POST" onSubmit={signIn} id="loginForm">
                        <label htmlFor="username">Email</label>
                        <input 
                            type="email" 
                            id="username" 
                            name="username" 
                            required 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                        />

                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />

                        <button id="loginBtn" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;