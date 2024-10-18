// EventDetailsForm.js
import React, { useState } from 'react';
import FormInput from './FormInput';

const EventDetailsForm = ({ onSubmit }) => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
  });

  const handleInputChange = (name, value) => {
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Event Registration</h2>
      <FormInput
        label="Name of Event"
        type="text"
        name="eventName"
        value={eventDetails.eventName}
        onChange={(e) => handleInputChange('eventName', e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </form>
  );
};

export default EventDetailsForm;
