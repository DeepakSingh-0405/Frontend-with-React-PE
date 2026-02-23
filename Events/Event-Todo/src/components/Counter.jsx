import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    function handleIncrease(){
        setCount(count+1);
    }
    function handleDecrease(){
        setCount(count-1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={handleIncrease} style={{padding:'10px',borderRadius:'10px',margin:'5px', backgroundColor:'black'}}>UP</button>
        <button onClick={handleDecrease} style={{padding:'10px',borderRadius:'10px',margin:'5px',backgroundColor:'black'}}>DOWN</button>
    </div>
  )
}

export default Counter