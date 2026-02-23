import React, { useState, useSyncExternalStore } from 'react'

function EventTodo() {
    const [tasks,setTasks] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        const todo = e.target.todo.value;
        console.log(todo);
        todo.trim() === '' ? alert('Please enter a todo') : null;

        // const taskList = document.getElementById('taskList');
        // const li = document.createElement('li');
        // li.innerHTML = `<span >${todo}</span> <button class = 'removebtn'>delete</button>`
        // taskList.appendChild(li)
        // li.style = 'cursor: pointer; padding: 5px; border: 1px solid #656262; border-radius: 10px; margin-bottom: 5px; display:flex; justify-content:space-between; align-items:centre;background-color: #0b0b0b; color: #f3f1f1; width: 100%';



        setTasks((prev)=>[...prev,todo]);

        e.target.reset();
    }
    function handleRemove(e) {
        // if(e.target.className === 'removebtn') 
        //     {e.target.parentElement.remove(); }
        // }
        setTasks((prev)=>(prev.filter(item=>item.id!=e.key)))
    }
return (
    <div>
    <form action="submit" onSubmit={(e) => handleSubmit(e)}
            style={{
                    display:"flex", gap:5, flexDirection:'column', alignItems:'center'
            }}>
            <input type="text"
            name= "todo"
            placeholder='Enter todo...'
            style={{padding:'20px',borderRadius:'10px', border:'1px solid #656262', width:'100%'}}
            /> <br />
            <button type='submit' style={{padding:'20px',borderRadius:'10px', width:'100%',backgroundColor:'#212121'}}>Add todo</button>
    </form>

    {/* <ul id='taskList' onClick={(e) => handleRemove(e)}
    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}></ul> */}
    {tasks.map((todo,index)=>(
        <div key={index}>{todo}
        <button onClick={(e)=>handleRemove(e)}>Delete</button>
        </div>

    ))}

    </div>
)
}

export default EventTodo;