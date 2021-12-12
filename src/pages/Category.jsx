import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

function Category({name, products}) {

    const params = useLocation()

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
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
        <div key={index} className={`lg:flex items-center gap-8 ${index%2!==0 ? 'flex-row-reverse my-20' : ''}`}>
            <div className='flex-1'>
                <img src={productImage} alt="product" className='rounded-lg'/>
            </div>
            <div className='text-center lg:text-left flex-1'>
            <div className={`md:w-2/3 mx-auto ${index%2!==0 ? 'lg:mx-0': 'mx-auto'}`}>
                {product.new ? <div className="overline text-primary my-4">NEW PRODUCT</div>: ``}
                <h2 className='uppercase my-8'>{product.name}</h2>
                <p className='my-4'>{product.description}</p>
                <Link to={`/product/${product.slug}`} className='inline-block bg-primary py-5 px-10 text-white tracking-wider hover:bg-primaryLight'>SEE PRODUCT</Link>
                </div>
            </div>
        </div>
        </>);
    })

    return (
        <div className=''>
            <div className='bg-secondary text-center text-white pt-24 pb-6 md:pt-32 md:pb-10'>
                <h2 className='uppercase'>{name}</h2>
            </div>
            <div className="container w-11/12 mb-24 mt-12">
                <div>{renderProducts}</div>
            </div>
            <Categories/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Category
