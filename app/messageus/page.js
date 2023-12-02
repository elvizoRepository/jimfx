"use client"
import React, { useState } from 'react'
import ServicesNocta from '../../components/ServicesNocta'
import './messages.css'


export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        alert('Form submission successful!');
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        alert('An error occurred while submitting the form.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className='messages'>
        <h1 className='message-title PaddingSides'>Message Us Today</h1>
        <ServicesNocta/>
        <form onSubmit={handleSubmit}>
            <label>Enter Full Name</label>
            <input type='text' 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
            />

            <label>Enter Phone Number</label>
            <input type='text'
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
            />

            <label>Enter Your Email</label>
            <input type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
            />

            <button type='submit' className=' sendmessage cta-button'>Send Message</button>
        </form>
    </div>
  )
}
