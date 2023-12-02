import React from 'react'
import './aboutus.css'
import Mission from '../../components/Mission'
import History from './components/history'
import ServicesCta from '../../components/ServicesCta'

export default function page() {
  return (
    <div className=''>
        <h1 className='whoarewe PaddingSides'>Who Are We?</h1>
        <Mission/>
        <History/>
        <ServicesCta/>
    </div>
  )
}
