import axios from 'axios'
import React, { useRef } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const MessageForm = () => {

  const firstName=useRef()
  const lastName=useRef()
  const email=useRef()
  const phone=useRef()
  const Message=useRef()


  const handleMessage = async (e) => {
    e.preventDefault();
    const FirstName=firstName.current.value
    const LastName=lastName.current.value
    const Email=email.current.value
    const Phone=phone.current.value
    const message=Message.current.value
   
    try {
      await axios.post("http://localhost:5000/api/v1/message/send", {
        FirstName, LastName, Email, Phone, message
      });
      
      // Optionally show success message
      toast.success('Message sent successfully!');
      
    } catch (error) {
      // If the error has a response, use that, otherwise use the error message
      const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
      toast.error(errorMessage);
      console.error(error);
    }
    
  }    

  return (
    <div className="flex py-10 flex-col justify-center px-5 md:px-[90px]">
      <h2 className='flex items-center justify-center mb-4 font-semibold text-xl'>Send Us Message</h2>
      <form onSubmit={handleMessage}>
        <div className="flex flex-col  gap-2">
          <div className="w-full max-md:flex max-md:flex-col max-md:gap-2 md:flex md:gap-[2%]">
            <input type="text" className='rounded-se-xl p-1 md:w-[49%]' placeholder='FirstName' name='FirstName' ref={firstName} />

            <input type="text" className='rounded-se-xl p-1 md:w-[49%]' placeholder='LastName'  ref={lastName} />

          </div>
          <input type="email" placeholder='Email'  className='rounded-se-xl p-1' name='Email' ref={email} />

          <input type="number" placeholder='Phone' className='rounded-se-xl p-1' name='Phone' ref={phone} />

          <textarea rows={7} placeholder='Message'  className='rounded-se-xl p-1' ref={Message} name='message'></textarea>

          <div className=' flex my-2 justify-center items-center'>
            <button type="submit">Send</button>
          </div>

        </div>
      </form>
    </div>
  )
}
