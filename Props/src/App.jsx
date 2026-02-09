
import { use } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import Wrapper from './components/Wrapper'

function App() {
    const users = [
      {name: "Virat" , role: "Batsman",country:"India"},
      {name: "Rohit" , role: "Batsman",country:"India"},
      {name: "Jadeja" , role: "All Rounder",country:"India"},
      {name: "Bumrah" , role: "Bowler",country:"India"},
    ]
  return (
    <>
    <h1>Users Dashboard</h1>
    <Wrapper title="User Lists"> 
      {
        users.map((key,index)=>(<UserCard user={key} key={index}/>))
      }
    </Wrapper>
    </>
    
  )
}

export default App
