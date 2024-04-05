import React from 'react';
import { useState } from 'react';

export default function AreaForm() {
  const [ w, setW ] = useState(0);
  const [ h, setH ] = useState(0);

  const updateWidth = (event) => {
    setW(event.target.value);
  }

  const updateHeight = (event) => {
    setH(event.target.value);
  }

  return (
    <React.Fragment>
      <div>
        <label>Width:</label>
        <input type="text" value={w}
          onChange={updateWidth} />
      </div>
      <div>
        <label>Height:</label>
        <input type="text" value={h}
          onChange={updateHeight} />
      </div>
      <div>Area = {w*h} </div>
    </React.Fragment>
  )



}

