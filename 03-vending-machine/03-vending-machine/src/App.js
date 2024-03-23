import React from 'react';
import { useState } from 'react';

export default function App () {
  const [counter, setCounter] = useState(1);
  const option1 = () =>{
    setCounter(1)
  }
  const option2 = () =>{
    setCounter(2)
  }
  const option3 = () =>{
    setCounter(3)
  }


  const getDisplayMessage = () => {
    if (counter === 1) {
        return 'Dispensing coffee';
    }
    if (counter === 2) {
        return 'Dispensing Tea';
    }
    if (counter === 3) {
        return 'Dispensing orange juice';
    }
}


  return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display"
        style={{  border:'1px black solid',
                  width:'200px',
                  height:'50px'}}>
        <h4>{getDisplayMessage()}</h4>
        </div>
        <button onClick={option1}>Coffee</button>
        <button onClick={option2}>Tea</button>
        <button onClick={option3}>Orange Juice</button>
      </React.Fragment>
    );
  
}


