import React from 'react'
import Menu from '../components/Menu';
import Logo from '../assets/shared/desktop/logo.svg';
import {ImFacebook2, ImTwitter, ImInstagram} from 'react-icons/im';

function Footer() {
    return (
        <div className='bg-secondary'>
            <div className="container w-11/12 py-16 text-white text-center md:text-left">
                <div className='lg:flex items-center justify-between'>
                <img src={Logo} alt="logo" className='mx-auto my-8 md:ml-0'/>
                    <Menu/>
                </div>
                    <p className='text-gray-300 my-8 tracking-wide lg:w-1/2'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <div className='md:flex items-center justify-between'>
                    <p className='my-8 md:inline-block'>Copyright 2021. All Rights Reserved</p>
                    <div className='lg:self-start'>
                        <ImFacebook2 className='inline-block mx-2 text-xl hover:text-primaryLight'/>
                        <ImTwitter className='inline-block mx-2 text-xl hover:text-primaryLight'/>
                        <ImInstagram className='inline-block mx-2 text-xl hover:text-primaryLight'/>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer