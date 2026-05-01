import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex gap-2 justify-around m-10 font-bold'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Link to="/contact/1">Contact 1</Link>
      <Link to="/contact/2">Contact 2</Link>
    </div>
  )
}

export default Navbar