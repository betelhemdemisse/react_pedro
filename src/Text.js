import {useEffect} from 'react'; 

export const Text=(props)=>{
    useEffect(()=>{
        console.log("component mounted");
     return()=>{
          console.log("component unmounted");
        }
      },[])
    return (
        <div>
            
    <input type="text" onChange={props.textShow} />
    <h1>{props.text}</h1></div>)
}