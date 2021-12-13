import React from 'react'
import Headphone from '../assets/shared/desktop/image-headphones.png'
import Speaker from '../assets/shared/desktop/image-speakers.png'
import Earphone from '../assets/shared/desktop/image-earphones.png'
import { useNavigate } from 'react-router-dom'
import ArrowRight from '../assets/shared/desktop/icon-arrow-right.svg'

function Categories({toggleNavbar}) {

    const navigate = useNavigate()
    const NavToCategory = (link) => {
        if (window.innerWidth < 991.98) {
            toggleNavbar()
        }
        navigate(`/${link}`)
    }

    return (
        <div className="container w-11/12 lg:w-full flex flex-col md:flex-row gap-4">
            <div className="text-center relative z-0">
                <div className="w-full h-1/2 lg:h-2/3">
                    <img src={Headphone} alt="headphones" className="w-1/2 mx-auto"/>
                </div>
                <div className='cursor-pointer' onClick={() => NavToCategory('headphones')}>
                <h5>HEADPHONES</h5>
                <div className="text-sub mb-8 inline-block hover:text-primary">SHOP <img src={ArrowRight} alt="arrow" className="inline-block ml-2"/></div>
                </div>
                <div className="absolute bottom-0 left-0 rounded-lg bg-greyLight w-full h-3/4 -z-1"></div>
            </div>
            <div className="text-center relative z-0">
                <div className="w-full h-1/2 lg:h-2/3">
                    <img src={Speaker} alt="speakers" className="w-1/2 mx-auto"/>
                </div>
                <div className='cursor-pointer' onClick={() => NavToCategory('speakers')}>
                <h5>SPEAKERS</h5>
                <div className="text-sub mb-8 inline-block hover:text-primary">SHOP <img src={ArrowRight} alt="arrow" className="inline-block ml-2"/></div>
                </div>
                <div className="absolute bottom-0 left-0 rounded-lg bg-greyLight w-full h-3/4 -z-1"></div>
            </div>
            <div className="text-center relative z-0">
                <div className="w-full h-1/2 lg:h-2/3">
                    <img src={Earphone} alt="earphones" className="w-1/2 mx-auto"/>
                </div>
                <div className='cursor-pointer' onClick={() => NavToCategory('earphones')}>
                <h5>EARPHONES</h5>
                <div className="text-sub mb-8 inline-block hover:text-primary">SHOP <img src={ArrowRight} alt="arrow" className="inline-block ml-2"/></div>
                </div>
                <div className="absolute bottom-0 left-0 rounded-lg bg-greyLight w-full h-3/4 -z-1"></div>
            </div>
        </div>
    )
}

export default Categories
