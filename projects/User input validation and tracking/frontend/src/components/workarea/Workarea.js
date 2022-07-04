import { useState } from 'react';

import Block from '../block';

import './workarea.css';

export default function Workarea() {
  const [components, setComponents] = useState([true]);
  const addNew = () => setComponents((old) => [...old, true]);
  return (
    <div className="workarea">
      <div className="toolbar">
        <button onClick={addNew}>Add New Entry</button>
      </div>
      <div className="paper-sheet">
        <header>
          <h3>Experience</h3>
        </header>
        {components.map((_, i) => (
          <Block key={i} />
        ))}
      </div>
    </div>
  );
}
