import React from 'react'
import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

export default function App() {
//   const [user,setUser]=useState(
//     {
//       username:"",
//       password:"" 
//     }
//   );
//   const{username,password}=user;
//   const handler = e=>
//   {
//     setUser({user,[e.target.name]:[e.target.value]})
//   }
//   const submithandler=e=>{
//   e.preventDeafult();
//     console.log(user);
//   }
  return (
    <div>
      <center>
      
      <form >
        <input type="text" placeholder="username"/><br/>
        <input type="password" placeholder="password" /><br/>
        <Link><input type="submit" placeholder="submit"  /></Link>
        

      </form>
     
    </center> 
     
     
    </div>
  
  )
}
