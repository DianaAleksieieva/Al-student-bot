import React, { useState } from "react";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    citizenshipStatus: "",
    stateResident: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log("Prototype Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="student-registration-form">
      <h2>Student Registration (Prototype)</h2>

      {/* Citizenship Status */}
      <div>
        <label>Are you an international student or US citizen?</label>
        <select
          name="citizenshipStatus"
          value={formData.citizenshipStatus}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="international">International</option>
          <option value="us-citizen">US Citizen</option>
        </select>
      </div>

      {/* State Resident */}
      <div>
        <label>Are you a state resident?</label>
        <select
          name="stateResident"
          value={formData.stateResident}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Interests */}
      <div>
        <label>Your Interests:</label>
        <textarea
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          placeholder="List your academic and extracurricular interests"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentRegistrationForm;