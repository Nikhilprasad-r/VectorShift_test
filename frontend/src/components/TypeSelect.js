import React from 'react';

export const TypeSelect = ({ label, value, onChange, options }) => (
  <label>
    {label}:
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </label>
);
