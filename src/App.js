import React,{useState} from 'react'; 
import './App.css'; 
import home from "./home"; 
import dashboard from "./dashboard"; 
import about from "./about"; 
import Navbar from "./navbar";  
import { SelectSign } from './components/selectSign.jsx'; 
import { SelectTimeframe } from './components/SelectTimeframe'; 
import { Horoscope } from './components/Horoscope'; 
import {BrowserRouter,Switch,Route} from "react-router-dom"; 
function App() { 
  const [selectedSign ,setSelectedSign]=useState(null); 
  const [SelectedTimeframe ,setSelectedTimeframe]=useState(null); 
  const restart =()=> 
  { 
    setSelectedSign(null); 
    setSelectedTimeframe(null); 
  } 
   
  return ( 
    <div className="main"> 
     
 
     <BrowserRouter> 
    <Navbar/> 
    <Switch> 
    <Route exact path="/home" component={home} ></Route> 
      <Route exact path="/dashboard" component={dashboard} ></Route> 
      <Route exact path="/about" component={about} ></Route>   
     
    </Switch> 
    </BrowserRouter> 
 
 
  <div className="App"> 
 
      <h1>the horoscope</h1> 
 
      <h2>please select a sign</h2> 
 
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
     
    </div> 
 
 
 
 
  ); 
} 
 
export default App;