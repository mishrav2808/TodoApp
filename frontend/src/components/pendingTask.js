const PendingTask = (props) => {
    console.log(props);
    return(
        
        <li>  
            <label><input type='checkbox'onClick={()=>props.changeStatus(props.data._id)}></input></label>
            <p>{props.data.task}</p>&nbsp;
            <button class = "btn btn-danger" type="button" onClick={()=>props.delete(props.data._id)}>Delete</button>
        </li>
        
    );
}

export default PendingTask;