import React from 'react'

function Task() {
  return (
    <div className='todo_div'>
      <li>
        <input type='checkbox' />
          Task 1
        <button className='edit_btn'>Edit</button>
        <button className='delete_btn'>Delete</button>
      </li>
    </div>
  )
}


export default Task;