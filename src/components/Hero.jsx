import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
    useEffect(() => {
        
      gsap.to('.hero__content', {y:'-100%', scrollTrigger: {
          trigger: '.hero__wrapper',
          start: 'bottom 99%',
          end: 'bottom top',
          scrub: 1
      }})

      gsap.to('.hero__wrapper',{y:'-25%', scrollTrigger:{
          trigger: '.hero__wrapper',
          start: 'bottom 99%',
          end: 'bottom top',
          scrub: 1
      }})
    }, []);
    
    return (
        <div className="w-full min-h-screen bg-center bg-no-repeat bg-cover bg-hero md:bg-hero-md lg:bg-hero-lg hero__wrapper">
            <div className="container flex items-center justify-center w-11/12 h-screen text-center lg:w-full lg:text-left lg:justify-start">
                <div className='w-full lg:w-1/2 hero__content'>
                    <div className="my-4 text-gray-400 overline md:my-6">NEW PRDOUCT</div>
                    <h1 className='my-4 text-white md:my-6'>XX99 MARK II HEADPHONES</h1>
                    <p className='mx-auto my-4 text-greyLight md:my-6 md:w-1/2 lg:w-2/3 lg:pr-20 lg:ml-0'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Link to="/product/xx99-mark-two-headphones" className='inline-block px-10 py-5 my-4 text-xl tracking-wider text-white md:my-6 bg-primary hover:bg-primaryLight'>SEE PRODUCT</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero