import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../../redux/actions'

function Todo({ todo, toggleTodo }) {
  const handleToggle = () => {
    toggleTodo(todo.id)
  }
  return (
    <li className="todo-item" onClick={handleToggle}>
      {todo && todo.completed ? '👌' : '👋'}
      <span className="todo-item-text">{todo.content}</span>
    </li>
  )
}

export default connect(null, { toggleTodo })(Todo)
