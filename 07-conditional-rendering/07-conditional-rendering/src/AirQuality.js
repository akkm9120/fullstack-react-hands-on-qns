import React, {useState} from 'react'

export default function AirQuality(){

    const [psi, setPsi] = useState(0);

    const getAirQualityText = (psi) => {
        if(psi<=50){
          return "healthy";
        }else if (psi<=150 && psi>50){
          return "moderate";
        }else if (psi<=200 && psi>150){
          return "Unhealthy"
        }else{
          return "Hazardous"
        }
      }
    
    const getAirQualityColor = (getAirQualityText) => {
      if (getAirQualityText=="healthy"){}
    }
    

    return (
      <React.Fragment>
        <div>
            <label>Enter the PSI:</label>
            <input  type="text" 
                    value={psi} 
                    onChange={(e)=>{setPsi(e.target.value)}}
            />
        </div>
        <h1>Air Quality</h1>
        <div id="air-quality" 
             style={{color:'black'}}
        >
            {getAirQualityText()}
        </div>
      </React.Fragment>
    )
    
}