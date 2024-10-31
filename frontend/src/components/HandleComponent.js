import React from 'react';
import { Handle, Position } from 'reactflow';

export const HandleComponent = ({ type, position, id, style }) => (
  <Handle type={type} position={position} id={id} style={style} />
);
