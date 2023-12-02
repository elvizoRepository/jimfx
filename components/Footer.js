import Link from 'next/link'
import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='PaddingSides footer'> 
        <div className='footer-elements'>
            <div>
                <img src='./logo.png' className='logo'/>
            </div>
            <div className='quicklinks'> 
                <h4>Quick Links</h4>
                <Link href='/' className='alinks'>Homepage</Link>
                <Link href='/aboutus' className='alinks'>About Us</Link>
                <Link href='/services' className='alinks'>Services</Link>
                <Link href='/messageus' className='alinks'>Contact</Link>
            </div>
            <div className='quicklinks'>
                <h4>Others</h4>
                <Link href='/equity' className='alinks'>Stocks</Link>
                <Link href='/bonds' className='alinks'>Bonds</Link>
                <Link href='/realestate' className='alinks'>Real Estate</Link>
            </div>
            <div className='quicklinks'>
                <h4>Contact</h4>
                <p className='alinks'>212 444 3 411</p>
                <p className='alinks'>212 444 6 468</p>
            </div>
            
        </div>
        <p className='allrights'>All Rights Reserved Jim Fx Capital</p>
    </div>
  )
}
