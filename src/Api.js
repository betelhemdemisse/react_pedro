import "./App.css";
import Axios from "axios";
import {useState,useEffect} from 'react';
const Api = () => {
  const [catFact, setCatFact] = useState("");
  //  fetch("https://catfact.ninja/fact")
  //  .then((res)=>res.json())
  //  .then((data)=>{
  //   console.log(data);
  //  })
  const displayCatFact=()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
     })
  } 
  useEffect(()=>{
    displayCatFact();
  },[]);
  
    return ( 
        <div className="App">
      <button onClick={displayCatFact}>Generate Cat Facts</button>
      <p>{catFact}</p>
        </div>
     );
}
 
export default Api;
