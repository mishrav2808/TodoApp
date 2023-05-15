import AddTask from "./AddTask";
import PendingTask from "./pendingTask";
import CompletedTask from "./CompletedTask";
import { useEffect,useState } from "react";
import "../styles.css"
const TodoList = () => {
    const [tasks,setTasks] = useState([]);
    
    const getData = async ()=>{
        
        const url="http://localhost:3000/tasks";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setTasks(data);
    }

    useEffect(()=>{
        getData();
    },[]);

    const handleAddTask = async (name)=>{
        const url="http://localhost:3000/addtasks";
        const data = {
            task_desc:name
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();  
        console.log(json);
        getData();
    }

    const handleStatusChange = async (taskID)=>{
        const url="http://localhost:3000/updatetasks";
        const data = {
            taskid:taskID
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();
        getData();
    }

    const handleDelete = async (taskID)=>{
        const url="http://localhost:3000/deletetask";
        const data = {
            taskid:taskID
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();
        getData();

    }

    const renderPendingtasks = ()=>{
        return (
            <>
            <h2 className="header">Pending</h2>
            <ul className="list"> 
            {
                tasks.map(task=>{
                    if(task.is_Completed != true && task.is_Deleted == false)
                    return <PendingTask data={task} changeStatus={handleStatusChange} delete={handleDelete}/>
                })
            }
            </ul>
            </>
        )
    }

    const renderCompletedtasks = ()=>{
        return (
            <>
                <h3 className="header">Completed</h3>
                <ul className="list"> 
                {
                    tasks.map(task=>{
                        if(task.is_Completed == true && task.is_Deleted == false)
                        return <CompletedTask data={task} changeStatus={handleStatusChange} delete={handleDelete}/>
                    })
                }
                </ul>
               
            </>
        )
    }

    return(
        <>  <h1>TodoList</h1>
            <AddTask addTask={handleAddTask}/>
            {renderPendingtasks()}
            {renderCompletedtasks()}
        </>
    );
}

export default TodoList;