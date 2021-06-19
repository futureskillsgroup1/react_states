const TaskItem = (props) => {
    const statusClicked = () => {
        props.onClick(!!props.status)
    }

    return (
        <div>
            <div className='card' onDoubleClick={statusClicked}>
                <h3>Task Name: {props.title}</h3>
                <h3>Added: {props.time}</h3>
                <h4>Status: {props.status ? 'Bajarilgan' : 'Bajarilmagan'}</h4>
                <button className='btn btn-danger'>Delete</button>
            </div>     
        </div>
    )
}

export default TaskItem
