import React from 'react';

export const NodeWrapper = ({ width, height, children }) => (
  <div style={{ width: width || 200, height: height || 80, border: '1px solid black', padding: '8px', boxSizing: 'border-box' }}>
    {children}
  </div>
);
