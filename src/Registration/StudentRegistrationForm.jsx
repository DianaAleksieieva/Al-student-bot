import React, { useState } from 'react';
import './StudentRegistration.css';
import { Link } from 'react-router-dom';

const StudentRegistrationForm = () => {
  const [citizenship, setCitizenship] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]); // Allow multiple interests
  const [name, setName] = useState('');
  const [cunyId, setCunyId] = useState('');

  const handleInterestClick = (interest) => {
    // Toggle interest in the selectedInterests array
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('CUNY ID:', cunyId);
    console.log('Citizenship:', citizenship);
    console.log('Selected Interests:', selectedInterests);
    // Submit the form data here
  };

  return (
    <div className="student-registration-form">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="cunyId">CUNY ID</label>
        <input
          type="text"
          id="cunyId"
          value={cunyId}
          onChange={(e) => setCunyId(e.target.value)}
          required
        />

        <label htmlFor="citizenship">Are you an International Student, US Citizen, or State Resident?</label>
        <select
          id="citizenship"
          value={citizenship}
          onChange={(e) => setCitizenship(e.target.value)}
          required
        >
          <option value="">Select one</option>
          <option value="International">International Student</option>
          <option value="US Citizen">US Citizen</option>
          <option value="State Resident">State Resident</option>
        </select>

        <label>What are your interests?</label>
        <div className="interests-container">
          {['Technology', 'Art', 'Sport', 'Volunteering', 'Writing'].map((interest) => (
            <button
              key={interest}
              type="button"
              className={`interest-button ${selectedInterests.includes(interest) ? 'active' : ''}`}
              onClick={() => handleInterestClick(interest)}
            >
              {interest}
            </button>
          ))}
        </div>

        <Link to="/dashboard">
        <button type="submit" className="submit-button">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;