import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NewArrival from '../components/NewArrival'

function Home() {
    return (
        <div>
            <Hero/>
            <div className="my-24">
            <Categories/>
            </div>
            <NewArrival/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Home
