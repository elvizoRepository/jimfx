import React from 'react'
import ServicesCta from '../../components/ServicesCta'

export default function page() {
  return (
    <div className=''>
        <h1 className='option-title PaddingSides'>Real Estate </h1>
        <p className='option-des PaddingSides'>Explore real estate with Jim Fx Capitals: meticulous property selection, 
        active management, and diversified portfolios across residential, commercial, and industrial sectors. 
        Uncover strategic insights for thriving real estate investments.
        </p>
        <div className='service-option-image PaddingSides'>
            <img src='./realestate.jpg'/>
        </div>
        <p className='option-des PaddingSides'>
        <span className='highlight'>Property Selection:</span> Jim Fx Capitals conducts thorough due diligence in selecting real estate properties. This includes analyzing location, market trends, potential for rental income, and long-term appreciation.
        </p>
        <p className='option-des PaddingSides'>
        <span className='highlight'>Active Property Management:</span> Realizing the full potential of real estate investments requires active management. Our team oversees property management activities, ensuring optimal occupancy rates, maintenance, and potential value-added enhancements.
        </p>
        <p className='option-des PaddingSides'>
        <span className='highlight'>Diversification within Real Estate:</span>We recognize the diversity within the real estate sector. Our strategy may involve exposure to different types of properties, such as residential, commercial, or industrial, to create a well-diversified real estate portfolio.
        </p>

        <ServicesCta/>
    </div>
  )
}
