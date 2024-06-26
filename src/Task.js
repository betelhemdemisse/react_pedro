export const Task=(props)=>{
return(
    <div className="task"
    style={{
        backgroundColor:props.completed?"green":"white"
    }}>
        <>
        <h6>{props.taskName}</h6>
        <button onClick={()=>props.completeTask(props.id)}>completed</button>
        <button onClick={()=>props.deleteTask(props.id)}>X</button></>
    </div>
);
}