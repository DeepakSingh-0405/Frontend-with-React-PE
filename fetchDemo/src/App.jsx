import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [axUser,setAxUser] = useState([])
  const [asyncUser,setAsUser] = useState([])
  
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")   
.then((response)=>{
    return response.json()
})
.then((data)=>{
  setUsers(data)
})
.catch((error)=>{
    console.log(error)
})

  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(data=>{
    setAxUser(data.data)
  })
  .catch(err=>{
    console.log(err)
  })

  async function getdata(){
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setAsUser(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  getdata();
  
  }, [])

  return (
    <>
      <h1
      >Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}

        {axUser.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))}

        {asyncUser.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
      
    </>
  )
}

export default App
