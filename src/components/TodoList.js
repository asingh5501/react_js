import React, { useState } from 'react'
import './ProfileCard.css'

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [editIndex, setEditIndex] = useState(null)
  const [editTask, setEditTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() === '') return
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  const handleEditTask = (index) => {
    setEditIndex(index)
    setEditTask(tasks[index])
  }

  const handleSaveEdit = () => {
    if (editTask.trim() === '') return
    const updatedTasks = tasks.map((task, index) =>
      index === editIndex ? editTask : task
    )
    setTasks(updatedTasks)
    setEditIndex(null)
    setEditTask('')
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className='counter-main-div profile-card'>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={Math.random().toString() || index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <div>
                {task}
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
