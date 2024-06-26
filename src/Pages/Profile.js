import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

export const Profile = () => {
    let navigate = useNavigate();
    // let {foodtype} = useParams(); you will use this to accept variable from url
    return ( 
        <><h1>This is the Profile Page for </h1>
        <button onClick={()=>{
            navigate("/contact")
        }}>go to contact page</button></>
     );
}
 