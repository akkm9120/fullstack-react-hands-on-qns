import React, {useState} from 'react'

function ColoredBox() {

    let [color, setColor] = useState(1);
    
    const num = ()=>{
        setColor(1)
    }
    const num1 = ()=>{
        setColor(2)
    }
    const num2 = ()=>{
        setColor(3)
    }

    const getColor = () => {
        if (color === 1) {
            return 'red';
        }
        if (color === 2) {
            return 'blue';
        }
        if (color === 3) {
            return 'green';
        }
    }

    return <React.Fragment>
        <div style={{
            border:'1px black solid',
            width:'50px',
            height:'50px',
            backgroundColor: getColor()
        }}>
        </div>

        <button onClick={num}>Red</button>
        <button onClick={num1}>Green</button>
        <button onClick={num2}>Blue</button>
    </React.Fragment>
  
}

export default ColoredBox;