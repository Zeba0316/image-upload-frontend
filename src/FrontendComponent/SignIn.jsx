import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [username,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/signup', { username,email, password });

      if (response.status === 200) {
        navigate('http://localhost:3001/login');
        alert('Sign-up successful');
      } else {
        setError(response.data.message || 'Sign-up failed'); 
      }
    } catch (error) {
      // Check if the error is coming from the server (response error) or it's a network error
      if (error.response) {
        // Server responded with a status other than 200
        setError(error.response.data.message || 'An error occurred during sign up');
      } else {
        // Network or unknown error
        setError('A network error occurred during sign up');
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignIn;
