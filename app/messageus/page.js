import React from 'react'
import ServicesNocta from '../../components/ServicesNocta'
import './messages.css'

export default function page() {
  return (
    <div className='messages'>
        <h1 className='message-title PaddingSides'>Message Us Today</h1>
        <ServicesNocta/>
        <form>
            <label>Enter Full Name</label>
            <input type='text' />

            <label>Enter Phone Number</label>
            <input type='text'/>

            <label>Enter Your Email</label>
            <input type='email'/>

            <label>Message</label>
            <textarea />

            <button className=' sendmessage cta-button'>Send Message</button>
        </form>
    </div>
  )
}
