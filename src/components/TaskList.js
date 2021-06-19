import { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => {
    const [status, setStatus] = useState(false)

    const changeStatusHandler = (changedStatus) => {
        changedStatus ? setStatus(false) : setStatus(true)
    }

    return (
        <div>
            {tasks.map(task => (
                <TaskItem 
                    key={task.id}
                    title={task.title}
                    time={task.time}
                    status={status}
                    onClick={changeStatusHandler}
                />
            ))}           
        </div>
    )
}

export default TaskList
