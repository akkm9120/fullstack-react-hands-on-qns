import React, { useState } from 'react';

function Dice() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [dice3, setDice3] = useState(1);

  const rollDice = (diceNumber) => {
    // Function to generate a random number for a specific dice
    const newRoll = Math.floor(Math.random() * 6) + 1; // 1-6 inclusive
    switch (diceNumber) {
      case 1:
        setDice1(newRoll);
        break;
      case 2:
        setDice2(newRoll);
        break;
      case 3:
        setDice3(newRoll);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex-container">
      <div
        style={{
          padding: '20px',
          border: '2px solid green',
          color: '#ffffff',
          width: '10%',
          height: '100px',
          backgroundColor: dice1 % 2 === 0 ? 'green' : 'red',
        }}
        onClick={()=>rollDice(1)} // Call rollDice for dice1
      >
        {dice1}
      </div>
      <div
        style={{
          padding: '20px',
          border: '2px solid green',
          color: '#ffffff',
          width: '10%',
          height: '100px',
          backgroundColor: dice2 % 2 === 0 ? 'green' : 'red',
        }}
        onClick={() => rollDice(2)} // Call rollDice for dice2
      >
        {dice2}
      </div>
      <div
        style={{
          padding: '20px',
          border: '2px solid green',
          global: 'green', // Removed typo (added for clarity)
          color: '#ffffff',
          width: '10%',
          height: '100px',
          backgroundColor: dice3 % 2 === 0 ? 'green' : 'red',
        }}
        onClick={() => rollDice(3)} // Call rollDice for dice3
      >
        {dice3}
      </div>
      <button onClick={() => [rollDice(1),rollDice(2), rollDice(3)]}>Roll All</button> </div>
  );
}

export default Dice;
