
import './RegisterPage.css';
import React, { useState } from 'react';


function RegisterPage({userDatabase, setUserDatabase}) {
  
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState('');

  const handleRegistration = () => {
    if (username.trim() === '' || password.trim() === '') {
      setRegistrationError('Username and password cannot be empty.');
      return;
    }

    onRegister(username, password); // Call the onRegister function to add the user

    setRegistrationSuccess('Registration Successful');
    history.push('/login'); // Redirect to the login page
  }

  return (
    <div>
        {/* Using InnerComponent here */}
        <InnerComponent 
          handleRegistration={handleRegistration}
          setUsername={setUsername}
          setPassword={setPassword}
          username={username}
          password={password}
        />
      </div>
  );
}

export default RegisterPage;

function InnerComponent({ handleRegistration, setUsername, setPassword, username, password }) {
  return (
    <div className="bckColor">
    <div className="bodyRegister">
    <div className="containerRegister">
      <label htmlFor="username">Username:</label>
      <input 
        type="text" 
        id="username-register" 
        name="username" 
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password-register" 
        name="password" 
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="registerBtn" onClick={handleRegistration}>
        Register
      </button>
    </div>
    </div>
  </div>
  );
}