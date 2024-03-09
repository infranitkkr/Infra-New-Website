// LeaderDetailsForm.js
import React, { useState } from 'react';
import FormInput from './FormInput';

const LeaderDetailsForm = ({ onSubmit , eventName}) => {
  const [leaderDetails, setLeaderDetails] = useState({
    leaderName: '',
    leaderEmail: '',
    leaderMobile: '',
    leaderBranch: '',
    leaderCollege: '',
  });

  const handleInputChange = (name, value) => {
    setLeaderDetails({ ...leaderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(leaderDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">{eventName} Event Registration</h2>
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Leader Details</h2>
      <FormInput
        label="Leader Name"
        type="text"
        name="leaderName"
        value={leaderDetails.leaderName}
        onChange={(e) => handleInputChange('leaderName', e.target.value)}
        required
      />
      <FormInput
        label="Leader Email"
        type="email"
        name="leaderEmail"
        value={leaderDetails.leaderEmail}
        onChange={(e) => handleInputChange('leaderEmail', e.target.value)}
        required
      />
      <FormInput
        label="Leader Mobile"
        type="tel"
        name="leaderMobile"
        value={leaderDetails.leaderMobile}
        onChange={(e) => handleInputChange('leaderMobile', e.target.value)}
        required
      />
      <FormInput
        label="Branch"
        type="text"
        name="leaderBranch"
        value={leaderDetails.leaderBranch}
        onChange={(e) => handleInputChange('leaderBranch', e.target.value)}
        required
      />
      <FormInput
        label="College Name"
        type="text"
        name="leaderCollege"
        value={leaderDetails.leaderCollege}
        onChange={(e) => handleInputChange('leaderCollege', e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </form>
  );
};

export default LeaderDetailsForm;
