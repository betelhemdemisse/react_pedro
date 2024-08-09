import { useNavigate } from "react-router-dom";
import { ChangeProfile } from "../Component/ChangeProfile";
import {AppContext} from "../App1";
import { useContext } from "react";
// import { useParams } from "react-router-dom";

export const Profile = () => {
    const {username}=useContext(AppContext);

    let navigate = useNavigate();
    // let {foodtype} = useParams(); you will use this to accept variable from url
    return ( 
        <><h1>This is the Profile Page for {username}</h1>
           
           <ChangeProfile/>
        
         <button onClick={()=>{
            navigate("/contact")
        }}>go to contact page</button>
       </>
     );
}
 