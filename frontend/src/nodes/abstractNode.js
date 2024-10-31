import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';


// AbstractNode.js
export const AbstractNode = ({ id, nodeType, data, children }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });
  const [variableHandles, setVariableHandles] = useState([]);

  useEffect(() => {
    const newWidth = Math.max(200, currText.length * 8);
    const newHeight = Math.max(80, Math.ceil(currText.length / 20) * 20);
    setNodeSize({ width: newWidth, height: newHeight });
  }, [currText]);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const variables = matches.map(match => match[1]);
    setVariableHandles(variables);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div
      style={{
        width: nodeSize.width,
        height: nodeSize.height,
        border: '1px solid black',
        padding: '8px',
        boxSizing: 'border-box',
      }}
    >
      {variableHandles.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: `${(index + 1) * 20}%` }}
        />
      ))}
      
      <div>
        <span>{nodeType}</span>
      </div>

      {children}

      <input
        type="text"
        value={currText}
        onChange={handleTextChange}
        style={{
          width: '100%',
          height: 'auto',
          resize: 'none',
          fontSize: 'inherit',
          border: 'none',
          outline: 'none',
        }}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
