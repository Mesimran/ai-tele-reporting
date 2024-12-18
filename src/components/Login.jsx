// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [userType, setUserType] = useState('doctor'); // State to manage user type

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(`${userType.charAt(0).toUpperCase() + userType.slice(1)} Login:`, Object.fromEntries(formData));
    // Handle the login logic here based on the user type
  };

  return (
    <div className="login">
      <h2>LOGIN</h2>
      <div className="user-type-toggle">
        <button onClick={() => handleUserTypeChange('doctor')} className={userType === 'doctor' ? 'active' : ''}>Doctor</button>
        <button onClick={() => handleUserTypeChange('hospital')} className={userType === 'hospital' ? 'active' : ''}>Hospital</button>
        <button onClick={() => handleUserTypeChange('admin')} className={userType === 'admin' ? 'active' : ''}>Admin</button>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}</button>
      </form>
    </div>
  );
}

export default Login;
