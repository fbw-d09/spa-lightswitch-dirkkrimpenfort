import React, { useState } from 'react';
import './room.scss';

export const Room = () => 
{
    const [isLit, setLit] = useState(true);
    const toggleLight = () => {
        setLit(!isLit);
      };
    
      return (
        <div className={isLit ? 'lit' : 'dark'}>
          <p>{isLit ? 'The room is lit' : 'The room is dark'}</p>
          <button onClick={toggleLight}>Lichtschalter</button>
        </div>
        )
}