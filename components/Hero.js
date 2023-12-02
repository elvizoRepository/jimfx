import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero PaddingSides'>
        <div>
            <p className='small-heading'>JIM FX CAPITAL</p>
            <h1 className='big-heading'>Empowering Your Financial Future</h1>
            <p className='tizzer'>Where Trust Meets Prosperity. Your Journey to <span className='highlight'>Financial Success</span> Starts Here.</p>
        </div>
        <div className='image-container'>
          <img src='./group.jpg'/>
        </div>
    </div>
  )
}
