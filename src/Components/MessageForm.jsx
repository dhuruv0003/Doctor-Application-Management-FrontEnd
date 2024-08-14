import React from 'react'
import { useState } from 'react'

export const MessageForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
  })
  const changeHandler = (e) => {
    setFormData((prevdata) => {
      return { ...prevdata,
        [e.target.name]:e.target.value
       }
    }
    )
  }

  const handleMessage = (e) => {
    e.preventDefault();
  }

  return (
    <div className='container form-component message-form'>
      <h2>Send Us Message</h2>
      <form onSubmit={handleMessage}>
        <div className="">
          <input type="text" placeholder='FirstName' value={formData.firstName} />
          <input type="text" place />
        </div>
      </form>
    </div>
  )
}
