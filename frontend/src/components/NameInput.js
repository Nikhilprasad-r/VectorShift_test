import React from 'react';

export const NameInput = ({ label, value, onChange }) => (
  <label>
    {label}:
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
    />
  </label>
);
