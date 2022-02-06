import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Link, useLocation } from 'react-router-dom'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

function Category({name, products}) {

    const params = useLocation()

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        gsap.from('.category__header', {y:'-100%', opacity:0})

        window.scrollTo(0,0)
    }, [params.pathname])

    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const renderProducts = products.map((product,index) => {

        let productImage
        if (windowWidth < 767.98) {
            productImage = product.image.mobile
        }else if (windowWidth < 991.98) {
            productImage = product.image.tablet
        }else{
            productImage = product.image.desktop
        }
        return(<>
        <div key={index} className={`lg:flex items-center gap-8 category${product.id}__wrapper ${index%2!==0 ? 'flex-row-reverse my-20' : ''}`}>
            <div className={`flex-1 category${product.id}__image`}>
                <img src={productImage} alt="product" className='rounded-lg'/>
            </div>
            <div className={`flex-1 text-center lg:text-left category${product.id}__detail`}>
                <div className={`md:w-2/3 mx-auto ${index%2!==0 ? 'lg:mx-0': 'mx-auto'}`}>
                    {product.new ? <div className="my-4 overline text-primary">NEW PRODUCT</div>: ``}
                    <h2 className='my-8 uppercase'>{product.name}</h2>
                    <p className='my-4'>{product.description}</p>
                    <Link to={`/product/${product.slug}`} className='inline-block px-10 py-5 tracking-wider text-white bg-primary hover:bg-primaryLight'>SEE PRODUCT</Link>
                </div>
            </div>
        </div>
        </>);
    })

    return (
        <div className='overflow-hidden'>
            <div className='pt-24 pb-6 text-center text-white bg-secondary md:pt-32 md:pb-10 category__header'>
                <h2 className='uppercase'>{name}</h2>
            </div>
            <div className="container w-11/12 mt-12 mb-24">
                <div>{renderProducts}</div>
            </div>
            <Categories/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Category
