"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import './navbar.css'
import { useRouter,usePathname } from 'next/navigation'
import{ BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
      return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      };

  }, [navbarOpen]);
  const closeNavbar = () => {
    setNavbarOpen(false);
  };
  return (
    <div className='nav-bar PaddingSides'>
        <img src='./logo.png' className='logo'/>
        <div className='nav-links'>
            <Link href='/' className= {pathname === '/' ? 'active' : 'alinks' } >Home</Link>
            <Link href='/aboutus' className= {pathname === '/aboutus' ? 'active' : 'alinks' } >About Us</Link>
            <Link href='/services' className= {pathname === '/services' ? 'active' : 'alinks' } >Services</Link>
            <Link href='/messageus' className= {pathname === '/messageus' ? 'active' : 'alinks' } >Contact Us</Link>
        </div>
        <Link href='/#getStarted' className='navbar-cta cta-color cta-button'>Get Started</Link>
        <div className='toggle'onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? <IoMdClose className='menu-icon'/> :  <BiMenu className='menu-icon' />}
      </div>

      <div ref={ref} className={`side-nav${navbarOpen ? ' show-menu' : ''}`}>
	      <div className='sidelinks'>
            <Link href='/' onClick={closeNavbar} className= {pathname === '/' ? 'active' : 'alinks' } >Home</Link>
            <Link href='/aboutus' onClick={closeNavbar} className= {pathname === '/aboutus' ? 'active' : 'alinks' } >About Us</Link>
            <Link href='/services' onClick={closeNavbar} className= {pathname === '/services' ? 'active' : 'alinks' } >Services</Link>
            <Link href='/messageus' onClick={closeNavbar} className= {pathname === '/messageus' ? 'active' : 'alinks' } >Contact Us</Link>
	      </div>
      </div>
    </div>
  )
}
