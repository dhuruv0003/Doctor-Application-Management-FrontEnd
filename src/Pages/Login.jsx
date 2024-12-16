import React, { useContext, useRef } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);

  const EmailRef = useRef();
  const PasswordRef = useRef();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const Email = EmailRef.current.value;
    const Password = PasswordRef.current.value;
    try {
      const response = await axios.post('http://localhost:5000/api/v1/user/login', { Email, Password, Role: "Patient" }, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      toast.success(response.data.message)
      setIsAuthenticated('true');
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message)

    }
  }

  if (isAuthenticated) {
    return <Navigate to='/'></Navigate>
  }
  return (
    <div className='container form-component login-form'>
      <h2>Sign In</h2>
      <p>Please Login to Continue</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti ea facilis, optio qui quas.</p>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='dk@gmail.com' ref={EmailRef} />
        <input type="password" placeholder='abcd1234' ref={PasswordRef} />
        <div style={{ gap: '10px', justifyContent: 'flex-end', flexDirection: 'row' }} className="">
          <p style={{ marginBottom: 0 }}>Not Registered</p>
          <Link to={'/register'} style={{ textDecoration: 'none', alignItems: 'center' }}>
            Register Now
          </Link>
        </div>
        <div className=' flex my-2 justify-center items-center'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
