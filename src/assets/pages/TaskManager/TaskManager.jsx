import { useState } from 'react'

export const TaskManager = () => {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    const newTask = { name: taskName, description: taskDescription }
    setTasks([...tasks, newTask])
    setTaskName('')
    setTaskDescription('')
  }

  return (
    <>
        <div>
            <h1 className='text-5xl font-bold text-teal-500 m-2 text-center'>Lista tareas</h1>
            <div className='w-100 h-280 p-10 m-8 flex flex-col justify-center items-center bg-gradient-to-b from-teal-600 via-emerald-500 to-teal-600 rounded-xl'>
                <input type='text' placeholder='Nombre de la tarea' value={taskName} onChange={(e) => setTaskName(e.target.value)} className='font-bold p-2 m-2 rounded-xl'/>
                <input type='text' placeholder='Descripción de la tarea' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className='font-bold p-2 m-2 rounded-xl'/>
                <button onClick={handleAddTask} className='bg-blue-500 p-4 text-white rounded-xl font-semibold hover:bg-lime-600'>Agregar Tarea</button>
                <div className='mt-4'>
                    {tasks.map((task, index) => (
                    <div key={index} className='bg-white p-2 m-2 rounded shadow'>
                        <h3 className='font-bold'>{task.name}</h3>
                        <p>{task.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
