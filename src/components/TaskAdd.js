import { useState } from 'react'
import { v4 } from 'uuid'

const TaskAdd = (props) => {
    const [title, setTitle] = useState('')

    const changeTaskHandler = (e) => {
        setTitle(e.target.value)
    }

    const clickHandler = () => {
        const newTask = {
            id: v4(),
            title,
            time: '01.01.2021',
            status: false
        }

        props.addNewTask(newTask)
        setTitle('')
    }

 
    return (
        <div>
            <div className='card-add' >
                <input type="text" name="title" value={title} onChange={changeTaskHandler}/>
                <button className='btn' onClick={clickHandler}>Add</button>
            </div>       
        </div>
    )
}

export default TaskAdd
