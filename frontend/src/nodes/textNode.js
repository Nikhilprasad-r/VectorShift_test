// TextNode.js

import React from 'react';
import { useStore } from '../store';
import { AbstractNode } from './abstractNode';

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleTextChange = (e) => {
    updateNodeField(id, 'text', e.target.value);
  };

  return (
    <AbstractNode id={id} nodeType="Text" data={data}>
      <div>
        <label>
          Text:
          <input
            type="text"
            value={data.text || ''} // Default to an empty string if undefined
            onChange={handleTextChange}
          />
        </label>
      </div>
    </AbstractNode>
  );
};
