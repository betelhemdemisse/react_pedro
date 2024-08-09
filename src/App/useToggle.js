import {useState} from 'react';

export const useToggle = (initiallVal = false) => {
    
    const [state, setState]= useState(initiallVal);
         const toggle=()=>{
            setState((prev)=>!prev);
         }
    return [state, toggle];
}
 