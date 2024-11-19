import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

export const Navbar = () => {
  const [show, setShow] = useState(false)
  const { isAuthenticated } = useContext(AppContext);

  return (
    <nav className='container'>
      <div className="logo">
        HelloCare
      </div>
      <div className={show ? "navlinks showmenu" : "navlinks"}>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/appointment'>AppointMent</Link>
          <Link to='/about'>About US</Link>
        </div>
        {
          isAuthenticated ? (
            <button onClick={handleLogout}>
              Logout
            </button>)
            : (
              <button onclick={handleLogin}>
                Login
              </button>)
        }
      </div>
    </nav>
  )
}
