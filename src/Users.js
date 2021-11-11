import React,{useState} from 'react';
import { SelectSign } from './components/selectSign.jsx';
import { SelectTimeframe } from './components/SelectTimeframe';
import { Horoscope } from './components/Horoscope';

 
const Users=()=> {
    
    const [selectedSign ,setSelectedSign]=useState(0);
    const [SelectedTimeframe ,setSelectedTimeframe]=useState(0);
    const restart =()=>
    {
      setSelectedSign(null);
      setSelectedTimeframe(null);
    }

return(    
        <div className="predition">
    

        {selectedSign}
      
      {!selectedSign && <SelectSign onSignSelected={setSelectedSign}/>} 
  
  { selectedSign && !SelectedTimeframe &&   <SelectTimeframe onTimeframeSelected={setSelectedTimeframe}/>}<br/>
  
  { 
          selectedSign &&  SelectedTimeframe && 
          <Horoscope sign={selectedSign}
          timeframe={SelectedTimeframe}
  />
  }
  
  {selectedSign && <button onClick={restart}>restart</button>}
    </div>
      
    
        )
}

export default Users

