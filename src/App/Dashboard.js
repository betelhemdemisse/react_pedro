import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import "../App.css";
import {useToggle} from './useToggle';

export const Dashboard = () => {
       const [isVisible , toggle] =useToggle();
  // const [isVisible,setIsVisible] = useState(false);

    const schema = yup.object().shape({
        fullName:yup.string().required("Full Name is Required"),
        email:yup.string().email().required(),
        age:yup.number().positive().integer().min(18).required(),
        password:yup.string().min(6).max(15).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null],"password don't match").required(),
    });
   
    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema),
    });

   
    const onSubmit = (data)=>{
        console.log(data)
    }
    return ( <div>
        <button onClick={toggle}>{isVisible?"Sign Up":"Sign In"}</button>
{isVisible ?
        <form  onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In Form</h1>
            <input type="text"  placeholder="full name..."{...register("fullName")}/>
            <p className="error">{errors.fullName?.message}</p>
            <input type="text" placeholder="Email...."{...register("email")} />
            <p className="error">{errors.email?.message}</p>

            <input type="number" placeholder="Age..."{...register("age")}/>
            <p className="error">{errors.age?.message}</p>

            <input type="password" placeholder="password" {...register("password")}/>
            <p className="error">{errors.password?.message}</p>

            <input type="password"  placeholder="confirm password..."{...register("confirmPassword")}/>
            <p className="error">{errors.confirmPassword?.message}</p>

            <input type="submit" value="Submit" />
        </form>:
        
         <form  onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up Form</h1>
         <input type="text"  placeholder="full name..."{...register("fullName")}/>
         <p className="error">{errors.fullName?.message}</p>
         <input type="text" placeholder="Email...."{...register("email")} />
         <p className="error">{errors.email?.message}</p>

         <input type="number" placeholder="Age..."{...register("age")}/>
         <p className="error">{errors.age?.message}</p>

         <input type="password" placeholder="password" {...register("password")}/>
         <p className="error">{errors.password?.message}</p>

         <input type="password"  placeholder="confirm password..."{...register("confirmPassword")}/>
         <p className="error">{errors.confirmPassword?.message}</p>

         <input type="submit" value="Submit" />
     </form>}
    </div> );
}
 