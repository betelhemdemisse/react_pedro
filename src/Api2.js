import './App.css';
import Axios from 'axios';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Api2 = () => {

    const [excuse, setExcuse] = useState("");
   
    const fetchExcuse =(excuseFor)=>{
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseFor}/`).then((res)=>{
            setExcuse(res.data[0].excuse);
        });
    }
   
   
   
    // const [name,setName] = useState("");
    // const [predictedAge,setPredictedAge]= useState(0);
    //  const fetchData=()=>{
    // Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
    //     setExcuse(res.data);
    // })
   //  }
    return (
        <div className="App"> 
        <button onClick={()=>fetchExcuse("party")}>party</button>
        <button onClick={()=>fetchExcuse("family")}>family</button>
        <button onClick={()=>fetchExcuse("office")}>office</button>
                  <h1>{excuse}</h1>
        {/* <input onChange={(event)=>{setName(event.target.value)}} type="text" /><br />
        <button onClick={fetchData}>get name</button> */}
        {/* <h1>Predicted Name: {predictedAge?.name}</h1>
        <h1>Predicted Age: {predictedAge?.age}</h1>
        <h1>Predicted count: {predictedAge?.count}</h1> */}
        </div>
      );
}
 
export default Api2;