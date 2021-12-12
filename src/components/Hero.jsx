import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="w-full min-h-screen bg-hero md:bg-hero-md lg:bg-hero-lg bg-cover bg-no-repeat bg-center">
            <div className="container w-11/12 lg:w-full h-screen text-center lg:text-left flex items-center justify-center lg:justify-start">
                <div className='w-full lg:w-1/2'>
                    <div className="overline text-gray-400 my-4 md:my-6">NEW PRDOUCT</div>
                    <h1 className='text-white my-4 md:my-6'>XX99 MARK II HEADPHONES</h1>
                    <p className='text-greyLight my-4 md:my-6 md:w-1/2 lg:w-2/3 lg:pr-20 mx-auto lg:ml-0'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Link to="/product/xx99-mark-two-headphones" className='text-white text-xl py-5 px-10 inline-block my-4 md:my-6 tracking-wider bg-primary hover:bg-primaryLight'>SEE PRODUCT</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero