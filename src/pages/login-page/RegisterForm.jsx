import React, { useState } from 'react';

function RegisterForm({ onRegistration }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState('');

  const handleRegistration = () => {
    if (username.trim() === '' || password.trim() === '') {
      setRegistrationError('Username and password cannot be empty.');
      return;
    }

    onRegistration(username, password); // Call the onRegistration function to add the user

    setRegistrationSuccess('Registration Successful');
  };

  return (
    <div>
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
  );
}

export default RegisterForm;