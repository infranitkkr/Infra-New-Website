// FormInput.js
import React from 'react';

const FormInput = ({ label, type, name, value, onChange, required }) => (
  <label className="block text-gray-700 text-sm font-bold mb-2">
    {label}:
    <input className="form-input" type={type} name={name} value={value} onChange={onChange} required={required} />
  </label>
);

export default FormInput;
