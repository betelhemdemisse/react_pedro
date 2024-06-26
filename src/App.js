import './App.css';
import {User} from './User';
import {Planet} from './Plantes';
import {useState,useEffect} from 'react'; 
import {Task} from "./Task";
import {Text} from "./Text";
function App(){
  
  const [TextShow, setTextShow] = useState(false);
  
  const textShow=(event)=>{
    setTextShow(event.target.value)
  }
  
  // const age = 16;
  const isGreen = false;
  const [todoList,setToDoList]=useState([]);
  const [newTask,setNewTask]=useState("");
 
  const handleChange=(event)=>{
    setNewTask(event.target.value);
  }

  const addTask = ()=>{
    const task={
      id:todoList.length === 0 ? 1 :todoList[todoList.length - 1].id + 1,
      taskName:newTask,
      completed:false,
    }
    setToDoList([...todoList,task]);
  }

 const deleteTask=(id)=>{
setToDoList(todoList.filter((task)=>task.id!==id));
 }
 const completeTask=(id)=>{
  setToDoList(
    todoList.map((task)=>{
      if(task.id===id){
        return {...task, completed :true}
      }else{
        return task
      }
    })
  );
 }
  const [count, setCount] = useState(0);
  const increase=()=>{
    setCount(count+1);
  }
  const decrease=()=>{
    setCount(count-1);

  }
  const setToZero=()=>{
    setCount(0);

  }
  const [age, setAge] = useState(0);
  const [InputValue,setInputValue] = useState("");
  const handleOnChange=(event)=>{
    setInputValue(event.target.value);
  }
  const [showText,setShowText] = useState(false);
  const handleText=()=>{
    setShowText(!showText);
  }
  const [textstyle,setTextStyle] = useState("red");

  const handleTextColor =()=>{
    setTextStyle(textstyle ==="green"?"red":"green");
  }
  const users =[
    {name:"betelhem",
     age:23
    },
    {name:"bezawit",
     age:22
    }];
    const plantes =[
      {name:"Mars",isGasPlanet: false},
      {name:"Earth",isGasPlanet: false},
      {name:"Jupiter",isGasPlanet: true},
      {name:"Venus",isGasPlanet: false},
      {name:"Neptun",isGasPlanet: true},
      {name:"Uranus",isGasPlanet: true},
    ]
    const increaseAge=()=>{
      setAge(age +1 );
    }

  return(

    <div className="App">
     {TextShow && <Text text={TextShow} textShow={textShow} />} <br />

      <button onClick={()=>{setTextShow(!TextShow)}}>show text</button><br />

      <input type="text" onChange={handleChange} /><br />
        <button onClick={addTask}>AddToDoList</button> <br />
         {todoList.map((task)=>{
         return <Task completed={task.completed} taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask}/>
         })}
       <br />
      {count} <br />
      <button onClick={increase}>Increase</button><br />
      <button onClick={decrease}>Decrease</button><br />
      <button onClick={setToZero}>Set to Zero</button><br />
      <input type="text"onChange={handleOnChange} /><br />
      {InputValue}
      {showText &&<h2>HI MY NAME IS BETLHEM</h2>}

      <button onClick={handleText}>Show/Hide</button>
      <h1 style={{
        color:textstyle,
      }}>HELLO PEOPLE</h1>
      <button onClick={handleTextColor}>changecolor</button>
    {plantes.map((names,key)=>{
      return <>{names.isGasPlanet &&<Planet name={names.name}/>}</>/*you will use this if you want to check bolean value and if its true it will display the name of the planets */
    })}
       {users.map((user,key)=>{
        return <><User name={user.name}  age={user.age}/>
        </>
       })}{/*you will use this when you want to list array of data */}
   <h1>Age value = {age}</h1><button onClick={increaseAge}>increaseAge</button>
      

      <h1>{age > 15? "overage":"underage"}</h1>{/*ternary operration*/}
      <h1 style={{color:isGreen?"green":"red"}}>This Has Color</h1>
       <Job salary={90000} position="Senior SDE" company="Amazon"/>
       <hr />
       <Job salary={12000} position="Junior SDE" company="Google"/>
       <hr />
       <Job salary={10000} position="Project Manager" company="Netflix"/>
       <hr />
       
       {isGreen && <button>this is button</button>} {/*if isGreen is true then the button will show up */}
    </div>
  );
}
const Job = (props) =>{
  
  return(
    <>
    <h1>{props.salary}</h1>{/*props*/}
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
    </>
  );
}
export default App;
