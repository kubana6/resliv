import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">back to main</Link>
      </div>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to='/employees'> see the list of employees </Link>
      </div>
    </nav>
  )
}

export default React.memo(Header)
