import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Menu from '../components/Menu';
import Logo from '../assets/shared/desktop/logo.svg';
import {ImFacebook2, ImTwitter, ImInstagram} from 'react-icons/im';
import { useLocation } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger)

function Footer() {

    useEffect(() => {
      gsap.fromTo('.footer',{y:'100%'}, {y: '0', scrollTrigger:{
          trigger: '.footer__wrapper',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 2
      }})
    }, [useLocation().pathname]);
    

    return (
        <div className='bg-secondary footer__wrapper'>
            <div className="container w-11/12 py-16 text-center text-white md:text-left footer">
                <div className='items-center justify-between lg:flex'>
                <img src={Logo} alt="logo" className='mx-auto my-8 md:ml-0'/>
                    <Menu/>
                </div>
                    <p className='my-8 tracking-wide text-gray-300 lg:w-1/2'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <div className='items-center justify-between md:flex'>
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