import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventTodo from './components/EventTodo'
import Counter from './components/Counter'

function App() {
  const [color, setcolor] = useState('rgb(0,0,0)')
  function random(){
    return Math.floor(Math.random()*255);
  }
  function handleChange(){
    setcolor(`rgb(${random()},${random()},${random()})`)
  }

  return (
  <>
  <h1>ToDo LIST</h1>
  <EventTodo/>
  <hr />
  <Counter/>
  
  <div style={{backgroundColor:color,width:'20vw',height:'20vh'}}>
  <button onClick={handleChange}>ChangeColor</button>
  </div>
  </>
  )
}

export default App
