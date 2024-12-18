// src/components/Signup.js
import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [userType, setUserType] = useState('doctor'); // State to manage user type

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleDoctorSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Doctor Form Submitted:', Object.fromEntries(formData));
    // Handle the doctor signup logic here
  };

  const handleHospitalSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Hospital Form Submitted:', Object.fromEntries(formData));
    // Handle the hospital signup logic here
  };

  return (
    <div className="signup">
      <h2>SIGNUP</h2><br></br>
      <div className="user-type-toggle">
        <button onClick={() => handleUserTypeChange('doctor')} className={userType === 'doctor' ? 'active' : ''}>Doctor</button>
        <button onClick={() => handleUserTypeChange('hospital')} className={userType === 'hospital' ? 'active' : ''}>Hospital</button>
      </div>

      {userType === 'doctor' ? (
        <form onSubmit={handleDoctorSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="department" placeholder="Department" required />
          <input type="text" name="specialization" placeholder="Specialization" required />
          <input type="text" name="registrationId" placeholder="Registration ID" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="address" placeholder="Address" required />
          <input type="file" name="photoId" accept="image/*" required />
          <input type="tel" name="mobileNo" placeholder="Mobile No." required />
          <input type="password" name="password" placeholder="Generate Password" required />
          <button type="submit">Signup as Doctor</button>
        </form>
      ) : (
        <form onSubmit={handleHospitalSubmit}>
          <input type="text" name="hospitalName" placeholder="Hospital Name" required />
          <input type="text" name="address" placeholder="Address" required />
          <input type="text" name="department" placeholder="Department" required />
          <input type="text" name="license" placeholder="License No." required />
          <input type="text" name="mciRegistrationNo" placeholder="MCI Registration No." required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phoneNo" placeholder="Phone No." required />
          <input type="tel" name="emergencyContact" placeholder="Emergency Contact" required />
          <input type="password" name="password" placeholder="Generate Password" required />
          <button type="submit">Signup as Hospital</button>
        </form>
      )}
    </div>
  );
}

export default Signup;
