import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function Todo() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={() => dispatch({ type: "ADD_TODO", payload: text })}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo