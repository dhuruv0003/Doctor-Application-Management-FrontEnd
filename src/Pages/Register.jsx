import React, { useContext, useRef } from 'react'
import { AppContext } from '../Context/AppContext'
import { Navigate, useMatch, useNavigate } from 'react-router-dom';

export const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const nicref = useRef();
  const dobref = useRef();
  const genderref = useRef();
  const passwordref = useRef();
  const confpassref = useRef();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

  }

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <div className='container form-component register-form'>
      <h2>Sign Up</h2>
      <p>Please Sign Up to continue</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quisquam sed perferendis commodi, a explicabo.</p>
      <div className="">
        <input type="text" ref={firstnameRef} placeholder='firstName'/>
        <input type="text" ref={lastnameRef} placeholder='lastName'/>
      </div>
      <div className="">
        <input type="text" ref={emailRef} placeholder='firstName'/>
        <input type="text" ref={phoneRef} placeholder='lastName'/>
      </div>
      <div className="">
        <input type="text" ref={nicref} placeholder='firstName'/>
        <input type="text" ref={dobref} placeholder='lastName'/>
      </div>
      <div className="">
        <select ref={genderref} >
          <option >Select Gender</option>
          <option >Male</option>
          <option >Female</option>
          <option >Others</option>
        </select>
        <input type="text" ref={passwordref} placeholder='lastName'/>
        <input type="text" ref={confpassref} placeholder='lastName'/>
      </div>
      <div className="">
        
      </div>
    </div>
  )
}
