import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NewArrival from '../components/NewArrival'

gsap.registerPlugin(ScrollTrigger)

function Home() {
    
    return (
        <div className='overflow-hidden'>
            <Hero/>
            <div className='overflow-hidden home__category__wrapper'>
                <div className="my-24 home__category">
                <Categories/>
                </div>
            </div>
            <NewArrival/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Home
