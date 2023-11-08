
import './RegisterPage.css';
import React, { useState } from 'react';


function RegisterPage({userDatabase, setUserDatabase}) {
  
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState('');

  const handleRegistration = () => {
    if (email.trim() === '' || password.trim() === '') {
      setRegistrationError('Username and password cannot be empty.');
      return;
    }

    onRegister(email, password); // Call the onRegister function to add the user

    setRegistrationSuccess('Registration Successful');
    history.push('/login'); // Redirect to the login page
  }

  return (
    <div>
        {/* Using InnerComponent here */}
        <InnerComponent 
          handleRegistration={handleRegistration}
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
        />
      </div>
  );
}

export default RegisterPage;

function InnerComponent({ handleRegistration, setEmail, setPassword, email, password }) {
  return (
    <div className="bckColor">
    <div className="bodyRegister">
    <div className="containerRegister">
      <label htmlFor="email">Email:</label>
      <input 
        type="text" 
        id="email-register" 
        name="email" 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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