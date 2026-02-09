import React from 'react'
import { Children } from 'react'

function Wrapper({title, children}) {
  return (
    <div>
        <h2>{title}</h2>
        <div>{children}</div>

    </div>
  )
}

export default Wrapper