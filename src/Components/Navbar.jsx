import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'
import toast from 'react-hot-toast'

export const Navbar = () => {
  const [show, setShow] = useState(false)
  const { isAuthenticated,setIsAuthenticated } = useContext(AppContext);

  const handleLogout=async()=>{
    await axios.get('http://localhost:4000/api/v1/user/patient/logout',{
      withCredentials:true,
    }).then(res=>{
      toast.success(res.data.message)
      setIsAuthenticated(true)
    })
    .catch(err=>{
      toast.error(err.response.data.message)
    })
  }

  const navigate=useNavigate()

  const handleLogin=()=>{
    navigate('/login')
  }

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
