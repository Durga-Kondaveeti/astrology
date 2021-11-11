import React,{useEffect,useState} from "react";
import {getSigns} from '../services/api';


export const SelectSign=({onSignSelected})=>{
    const [signs,setSigns]=useState([]);
    useEffect(() => {
        getSigns().then(setSigns);
       }, []);
    
    return(
        <div className="grid">
        {signs.map ((sign)=>
        (
          <button className="signsbutton" 
          style={{background:"transparent",color:"white",width:"150px",height:"105px"}}
           className="sign" 
          key={sign}
          onClick={()=> onSignSelected(sign)}>
              <img src={"./img/"+sign+".jpg"} alt="my image"   width="150px"height="105px"/><br/>
            {sign.charAt(0).toUpperCase() + sign.slice(1)}
            </button>
        ))}
        </div>
    )
}
//hello