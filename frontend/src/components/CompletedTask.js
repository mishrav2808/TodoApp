const CompletedTask = (props) => {
    console.log(props.data);
    return(
            <li>
                <p>{props.data.task}</p>&nbsp;
                <button class = "btn btn-danger" type="button" onClick={()=>props.delete(props.data._id)}>Delete</button> 
            </li>

    );
}

export default CompletedTask;