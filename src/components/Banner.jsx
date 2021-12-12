import React, { useEffect, useState } from 'react'
import BannerImg_mobile from '../assets/shared/mobile/image-best-gear.jpg';
import BannerImg_tablet from '../assets/shared/tablet/image-best-gear.jpg';
import BannerImg_desktop from '../assets/shared/desktop/image-best-gear.jpg';

function Banner() {

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

    let bannerImage
    if (windowWidth < 767.98) {
        bannerImage = BannerImg_mobile
    } else if(windowWidth < 991.98){
        bannerImage = BannerImg_tablet
    }else{
        bannerImage = BannerImg_desktop
    }

    return (
        <div className='container w-11/12 lg:w-full my-24'>
            <div className='text-center lg:text-left lg:flex flex-row-reverse items-center lg:gap-24'>
                <img src={bannerImage} alt="best-gear" className='flex-1 rounded-lg'/>
                <div className='md:px-12 lg:px-0 flex-1'>
                    <div className='lg:w-3/4'>
                    <h2 className='uppercase my-8'>Bringing you the <span className='text-primary'>best</span>  audio gear</h2>
                    <p className='tracking-wide'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
