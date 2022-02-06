import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

function Product({getProduct, productQty, increaseQty, decreaseQty, addToCart}) {

    const {id} = useParams()
    const [product, setProduct] = useState()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        setProduct(() => getProduct(id))
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.scrollTo(0,0)
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    },[id])

    if (product) {
        const renderContent = product.includes.map(item => {
            return(<>
                <li key={item.item}><span className='text-primary'>{item.quantity}x </span> &nbsp; &nbsp; {item.item}</li>
            </>);
        })

        const renderRelatedProduct = product.others.map((item, index) => {
            let relatedProductImage
            if (windowWidth < 767.98) {
                relatedProductImage = item.image.mobile
            }else if (windowWidth < 991.98) {
                relatedProductImage = item.image.tablet
            }else{
                relatedProductImage = item.image.desktop
            }
            return (<>
                <div key={item.slug} className={`text-center ${index%2!==0 ? 'my-16 md:my-0' : ''}`}>
                    <img src={relatedProductImage} alt="item" className='rounded-lg'/>
                    <h4 className='my-3'>{item.name}</h4>
                    <Link to={`/product/${item.slug}`} className='inline-block px-10 py-5 text-white bg-primary hover:bg-primaryLight'>SEE PRODUCT</Link>
                </div>    
            </>)
        })

        let productImage, firstImage, secondImage, thirdImage
            if (windowWidth < 767.98) {
                productImage = product.pic.mobile
                firstImage =product.gallery.first.mobile
                secondImage =product.gallery.second.mobile
                thirdImage =product.gallery.third.mobile
            }else if(windowWidth < 991.98){
                productImage = product.pic.tablet
                firstImage =product.gallery.first.tablet
                secondImage =product.gallery.second.tablet
                thirdImage =product.gallery.third.tablet
            }else{
                productImage = product.pic.desktop
                firstImage =product.gallery.first.desktop
                secondImage =product.gallery.second.desktop
                thirdImage =product.gallery.third.desktop
            } 

    return (
        <div className='overflow-hidden'>
            <div className='py-9 bg-secondary'></div>
            <div className="container w-11/12 lg:w-full">
                <button className='mt-4 mb-8' onClick={() => window.history.back()}  className="hover:text-primary">Go Back</button>
                <div>
                <div className='items-center gap-8 md:flex'>
                        <div className='flex-1'>
                            <img src={productImage} alt="product"className='rounded-lg'/>
                        </div>
                        <div className='flex-1'>
                            {product.new ? <div className='my-4 overline text-primary'>NEW PRODUCT</div> : ''}
                            <h3 className='my-4 uppercase'>{product.name}</h3>
                            <p>{product.description}</p>
                            <h5 className='my-4'>&#0036; {product.price}</h5>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center px-6 py-4 bg-greyLight'><span className='hover:text-primary' onClick={decreaseQty}><AiOutlineMinus/></span><span className='mx-6'>{productQty}</span><span className='hover:text-primary' onClick={increaseQty}><AiOutlinePlus/></span></div>
                                <button className='inline-block px-8 py-4 text-white bg-primary' onClick={addToCart}>ADD TO CART</button>
                            </div>  
                        </div>
                    </div>
                    <div className="items-center justify-between gap-20 lg:flex">
                        <div className='my-20 lg:w-2/3'>
                            <h4 className='mb-4'>FEATURES</h4>
                            <p>{product.features}</p>
                        </div>
                        <div className='justify-between flex-1 my-20 md:flex lg:block'>
                            <h4 className='flex-1 mb-4'>IN THE BOX</h4>
                            <ul className='flex-1'>{renderContent}</ul>
                        </div>
                    </div>
                    <div className='items-center justify-center gap-4 md:flex'>
                        <div>
                            <div>
                                <img src={firstImage} alt="gallery" className='my-4 rounded-lg' />
                            </div>
                            <div>
                                <img src={secondImage} alt="gallery" className='my-4 rounded-lg' />
                            </div>
                        </div>
                        <div>
                            <img src={thirdImage} alt="gallery" className='my-4 rounded-lg' />
                        </div>
                    </div>
                    <div className='my-20 text-center'>
                        <h4>YOU MAY ALSO LIKE</h4>
                         <div className='items-center gap-4 my-4 md:flex'>{renderRelatedProduct}</div>
                    </div>
                </div>
            </div>
            <Categories/>
            <Banner />
            <Footer />
        </div>
    )
        }else{
            return null;
        }
}

export default Product
