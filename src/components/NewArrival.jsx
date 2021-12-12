import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Speaker from '../assets/shared/desktop/image-speakers.png';
import BgPattern from '../assets/home/desktop/pattern-circles.svg';
import YX1_lg from '../assets/home/desktop/image-earphones-yx1.jpg';
import YX1_md from '../assets/home/tablet/image-earphones-yx1.jpg';
import YX1 from '../assets/home/mobile/image-earphones-yx1.jpg';

function NewArrival() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
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
        <div className='container w-11/12 lg:w-full my-24'>
            <div className='bg-primary rounded-lg py-16 relative z-0 lg:flex items-center overflow-y-hidden'>
                <div className='flex-1 w-full relative lg:h-80'>
                    <img src={Speaker} alt="speaker" className='mx-auto lg:w-full lg:absolute left-0 lg:-mt-6'/>
                </div>
                <div className='text-center text-white flex-1'>
                    <h1>ZX9 <br /> SPEAKER</h1>
                    <p className='tracking-wide px-4 my-6 md:mb-8 md:w-1/2 mx-auto'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/product/zx9-speaker" className='py-5 px-10 inline-block tracking-wider bg-secondary hover:bg-gray-700'>SEE PRODUCT</Link>
                </div>
                <img src={BgPattern} alt="circles" className='absolute lg:w-1/2 top-0 -z-1'/>
            </div>
            <div className='rounded-lg bg-zx-7 md:bg-zx-7-md lg:bg-zx-7-lg bg-cover px-4 py-20 md:px-12 my-8'>
                <h3 className='mb-8 mt-4'>ZX7 SPEAKER</h3>
                <Link to="/product/zx7-speaker" className='inline-block py-5 px-10 mb-4 border border-secondary hover:bg-secondary hover:text-white'>SEE PRTODUCT</Link>
            </div>

            <div className='md:flex gap-4 items-stretch'>
                <div className='w-full flex-1'>
                    <img src={yx1_img} alt="earphone" className='w-full rounded-lg'/>
                </div>
                <div className='flex-1 rounded-lg bg-greyLight py-8 md:py-20 lg:py-24 px-4 lg:px-12 my-8 md:my-0'>
                    <h3 className='mb-8'>YX1 EARPHONES</h3>
                    <Link to="/product/yx1-earphones" className='inline-block py-5 px-10 mb-4 border border-secondary hover:bg-secondary hover:text-white'>SEE PRODUCT</Link>
                </div>
            </div>
        </div>
    )
}

export default NewArrival
