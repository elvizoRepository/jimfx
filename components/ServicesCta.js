import React from 'react'
import './servicescta.css'
import Link from 'next/link'

export default function ServicesCta() {
  return (
    <div className='servicescta'>
        <h1 className='servicescta-heading'>Secure Your Financial Future With Us</h1>
        <p className='servicescta-des'>Our team of experts are ready to discuss your financial future.</p>
        <Link href='/messageus' className='contact-us'>Contact Us</Link>
    </div>
  )
}
