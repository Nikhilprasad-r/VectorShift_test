// InputNode.js

import React from 'react';
import { AbstractNode } from './abstractNode';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleInputNameChange = (e) => {
    updateNodeField(id, 'inputName', e.target.value);
  };

  const handleInputTypeChange = (e) => {
    updateNodeField(id, 'inputType', e.target.value);
  };

  return (
    <AbstractNode id={id} nodeType="Input" data={data}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={data.inputName || ''} // Default to an empty string if undefined
            onChange={handleInputNameChange}
          />
        </label>
        <label>
          Type:
          <select value={data.inputType || 'Text'} onChange={handleInputTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </AbstractNode>
  );
};
