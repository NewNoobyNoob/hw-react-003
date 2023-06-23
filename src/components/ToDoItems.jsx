import React from 'react'

const ToDoItems = ({ToDo, Description}) => {

  return (
        <div className="todo-item">
            <p>ToDo: {ToDo}</p>
            <p>Description: {Description}</p>
        </div>  )
}

export default ToDoItems