import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Speaker from '../assets/shared/desktop/image-speakers.png';
import BgPattern from '../assets/home/desktop/pattern-circles.svg';
import YX1_lg from '../assets/home/desktop/image-earphones-yx1.jpg';
import YX1_md from '../assets/home/tablet/image-earphones-yx1.jpg';
import YX1 from '../assets/home/mobile/image-earphones-yx1.jpg';

gsap.registerPlugin(ScrollTrigger)

function NewArrival() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        gsap.to('.zx9__wrapper',{y:-100, scrollTrigger: {
            trigger: '.zx9__wrapper',
            start: 'top 80%',
            end: 'bottom top',
            scrub:2            
        }})

        gsap.to('.zx9__image',{y:-50, scrollTrigger: {
            trigger: '.zx9__wrapper',
            start: 'top 80%',
            end: 'bottom top',
            scrub:2            
        }})

        gsap.to('.zx7__wrapper',{y:-100, scrollTrigger:{
            trigger: '.zx7__wrapper',
            start: 'top 80%',
            end: 'bottom top',
            scrub: 2
        }})

        gsap.to('.yx1__image',{y:-120, scrollTrigger:{
            trigger: '.yx1__wrapper',
            start: 'top 80%',
            end: 'bottom top',
            scrub: 2
        }})

        gsap.to('.yx1__content',{y:-120, scrollTrigger:{
            trigger: '.yx1__wrapper',
            start: 'top 80%',
            end: 'bottom top',
            scrub: 2
        }})

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    let yx1_img
    if (windowWidth < 767.98) {
        yx1_img = YX1
    }else if(windowWidth < 991.98){
        yx1_img = YX1_md
    }else{
        yx1_img = YX1_lg
    }
    return (
        <div className='container w-11/12 my-24 lg:w-full'>


            <div className='relative z-0 items-center py-16 overflow-y-hidden rounded-lg bg-primary lg:flex zx9__wrapper'>
                <div className='relative flex-1 w-full lg:h-80 zx9__image'>
                    <img src={Speaker} alt="speaker" className='left-0 mx-auto lg:w-full lg:absolute lg:-mt-6'/>
                </div>
                <div className='flex-1 text-center text-white'>
                    <h1>ZX9 <br /> SPEAKER</h1>
                    <p className='px-4 mx-auto my-6 tracking-wide md:mb-8 md:w-1/2'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/product/zx9-speaker" className='inline-block px-10 py-5 tracking-wider bg-secondary hover:bg-gray-700'>SEE PRODUCT</Link>
                </div>
                <img src={BgPattern} alt="circles" className='absolute top-0 lg:w-1/2 -z-1'/>
            </div>


            <div className='px-4 py-20 my-8 bg-cover rounded-lg bg-zx-7 md:bg-zx-7-md lg:bg-zx-7-lg md:px-12 zx7__wrapper'>
                <h3 className='mt-4 mb-8'>ZX7 SPEAKER</h3>
                <Link to="/product/zx7-speaker" className='inline-block px-10 py-5 mb-4 border border-secondary hover:bg-secondary hover:text-white'>SEE PRTODUCT</Link>
            </div>


            <div className='items-stretch gap-4 md:flex yx1__wrapper'>
                <div className='flex-1 w-full yx1__image'>
                    <img src={yx1_img} alt="earphone" className='w-full rounded-lg'/>
                </div>
                <div className='flex-1 px-4 py-8 my-8 rounded-lg bg-greyLight md:py-20 lg:py-14 xl:py-24 lg:px-12 md:my-0 yx1__content'>
                    <h3 className='mb-8'>YX1 EARPHONES</h3>
                    <Link to="/product/yx1-earphones" className='inline-block px-10 py-5 mb-4 border border-secondary hover:bg-secondary hover:text-white'>SEE PRODUCT</Link>
                </div>
            </div>

            
        </div>
    )
}

export default NewArrival
