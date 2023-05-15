
const AddTask = (props) => {
    const addTask=()=>{
        const name = document.getElementById("task_desc").value;
        console.log(name);
        props.addTask(name);
    }
    return(
            <div className="form-row">
                <label htmlFor="task_desc">New Item  </label>
                <input type="text" name="task_desc" id="task_desc" />
                <button className="btn" onClick={addTask}>Add Task</button>
            </div>
        
    )
   ;
}

export default AddTask;