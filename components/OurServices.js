"use client"
import React from 'react'
import './ourServices.css'
import { useRouter } from 'next/navigation'

export default function OurServices() {
    const router = useRouter();
    function HandleEquity(){
        router.replace('/equity');
    }
    function HandleBonds(){
        router.replace('/bonds');
    }
    function HandleRealEstate(){
        router.replace('/realestate');
    }

  return (
    <div className='PaddingSides' id='getStarted'>
        <div className='services-big-heading'>
            <h1 className='ourServices'>Our Services</h1>
            <p className='ourSevices-des'>Our commitment goes beyond traditional approaches, as we craft bespoke investment strategies tailored 
                to your aspirations. With a focus on equities, bonds, real estate, and alternative investments, 
                our team combines expertise, 
                diversification, and meticulous risk management to navigate the complexities of the financial landscape</p>
        </div>
        <p className='services-small-heading'>Our Services & Inverstment Strategies</p>
        <div className='service-options'>
            <div className='service-container'>
                <div className='service-image'>
                    <img src='./equity.jpg' alt='image'/>
                    
                </div>
                <p className='service-title'>Equity(Stocks)</p>
                <p className='services-option-description'>Embark on an insightful journey into equities with Jim Fx Capitals. 
                    Our active stock selection blends fundamental and technical analyses, 
                    <span className='highlight'>identifying growth-driven companies.</span> Portfolio diversification spans 
                    sectors and regions, mitigating risk. With sophisticated risk management, 
                    we navigate the dynamic equity landscape for resilient investments.
                </p>
                
                <button onClick={HandleEquity} className='cta-color cta-button learnmore'>Learn More</button>
            </div>

            <div className='service-container'>
                <div className='service-image'>
                    <img src='./bonds.jpg' alt='image'/>
                    
                </div>
                <p className='service-title'>Bonds</p>
                <p className='services-option-description'>
                    Discover the world of bonds with Jim Fx Capitals, where our fixed income 
                    strategies align with client risk profiles. We curate portfolios with a mix of 
                    government and corporate bonds, <span className='highlight'>maximizing yield through a nuanced balance of risk 
                    and return.</span> Rigorous duration management safeguards against interest rate fluctuations, 
                    ensuring resilience in diverse market conditions. Explore our approach to fixed income for
                     a comprehensive understanding of strategic yield optimization.
                </p>
                
                <button onClick={HandleBonds} className='cta-color cta-button learnmore'>Learn More</button>
            </div>

            <div className='service-container'>
                <div className='service-image'>
                    <img src='./realestate.jpg' alt='image'/>
                    
                </div>
                <p className='service-title'>Real Estate</p>
                <p className='services-option-description'>Explore real estate with Jim Fx Capitals: 
                meticulous property selection, active management, and diversified portfolios across residential, commercial, 
                and industrial sectors. <span className='highlight'>Uncover strategic insights for thriving real estate investments.</span>
                </p>
                
                <button onClick={HandleRealEstate} className='cta-color cta-button learnmore'>Learn More</button>
            </div>
        </div>
    </div>
  )
}
