import React from 'react'

function UserCard({user,...rest}) {
  return (
    <div>
        <h2>Username: {user.name}</h2>
        <p>Role: {user.role}</p>
        <p>Country: {user.country}</p>
    </div>
  )
}

export default UserCard