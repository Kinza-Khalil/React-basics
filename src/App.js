import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [name, setName] = useState('')

  function handleAddTodo() {
    const newTodo = { id: todos.length, name: name, completed: false }
    setTodos([...todos, newTodo])
    setName('')
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/> 
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
    </>
  )
}

export default App
