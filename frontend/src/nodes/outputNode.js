// OutputNode.js

import React from 'react';
import { useStore } from '../store';
import { AbstractNode } from './abstractNode';

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleOutputNameChange = (e) => {
    updateNodeField(id, 'outputName', e.target.value);
  };

  const handleOutputTypeChange = (e) => {
    updateNodeField(id, 'outputType', e.target.value);
  };

  return (
    <AbstractNode id={id} nodeType="Output" data={data}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={data.outputName || ''} // Default to an empty string if undefined
            onChange={handleOutputNameChange}
          />
        </label>
        <label>
          Type:
          <select value={data.outputType || 'Text'} onChange={handleOutputTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </AbstractNode>
  );
};
