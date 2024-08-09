import {useState} from 'react';
import {AppContext} from "../App1";
import { useContext } from "react";
export const ChangeProfile= (props) => {
    const {setUsername}=useContext(AppContext);

   const [newUsername, setNewUsername] = useState("");
    return ( <>
     <input type="text" onChange={(event)=>setNewUsername(event.target.value)} />
     <button onClick={()=>{setUsername(newUsername)}}>change username</button>
   </>)
}
 
