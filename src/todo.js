import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : null }}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick}/>
        {todo.name}
      </label>
    </div>
  )
}
