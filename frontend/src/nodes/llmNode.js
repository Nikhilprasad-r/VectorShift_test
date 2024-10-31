// LLMNode.js

import React from 'react';
import { useStore } from '../store';
import { AbstractNode } from './abstractNode';

export const LLMNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleLLMNameChange = (e) => {
    updateNodeField(id, 'llmName', e.target.value);
  };

  return (
    <AbstractNode id={id} nodeType="LLM" data={data}>
      <div>
        <span>This is an LLM node.</span>
        <label>
          Name:
          <input
            type="text"
            value={data.llmName || ''} // Default to an empty string if undefined
            onChange={handleLLMNameChange}
          />
        </label>
      </div>
    </AbstractNode>
  );
};
