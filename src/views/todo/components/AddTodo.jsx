import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import { addTodo } from '../../../redux/actions'

function AddTodo(props) {
  const [todo, setTodo] = useState('')

  const handleInputChange = e => {
    setTodo(e.target.value)
  }

  const handleAddTodo = () => {
    props.addTodo(todo)
    // props.dispatch({
    //   type: 'ADD_TODO',
    //   payload: {
    //     id: Math.random(),
    //     content: todo
    //   }
    // })
    setTodo('')
  }
  return (
    <div className="add-todo">
      <Input value={todo} style={{ width: '240px' }} type="text" onChange={handleInputChange} />
      <Button onClick={handleAddTodo}>add</Button>
    </div>
  )
}

// export default connect()(AddTodo)
export default connect(null, { addTodo })(AddTodo)
