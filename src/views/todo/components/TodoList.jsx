import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos } from '../../../redux/selectors'

function TodoList({ todos = [] }) {
  return (
    <ul className="todo-list">
      {todos.length
        ? todos.map((todo, index) => <Todo key={index} todo={todo} />)
        : 'No todos, yay!'}
    </ul>
  )
}

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todo || {}
//   const todos =
//     allIds && allIds.length ? allIds.map(id => (byIds ? { ...byIds[id], id } : null)) : null
//   return { todos }
// }

// export default connect(mapStateToProps)(TodoList)
export default connect(state => ({ todos: getTodos(state)}))(TodoList)
