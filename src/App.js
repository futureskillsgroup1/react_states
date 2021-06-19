import { useState } from 'react'
import TaskList from './components/TaskList';
import TaskAdd from './components/TaskAdd'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn React',
      time: '01.01.2020',
      status: false
    },
    {
      id: 2,
      title: 'Learn Node.js',
      time: '01.01.2020',
      status: false
    }
  ])

  const addNewTask = (task) => {
    setTasks([...tasks, task])
  }

  return (
    <>
      <div className='wrap'>
        <h1>Task Manager</h1>
        <TaskAdd addNewTask={addNewTask}/>

        <TaskList tasks={tasks}/>
        
      </div>
    </>
  );
}

export default App;
