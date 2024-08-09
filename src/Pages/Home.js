
import {AppContext} from "../App1";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
export const Home = () => {
    const {data}=useQuery(["cat"],()=>
     {
       return  Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
     });
    const {username}=useContext(AppContext);
    return ( 
        <><h1>This is The Home Page For {username}</h1>
        <h1>Cat Fact</h1>
        <h2>{data.fact}</h2>
        </>
        
     );
}
 