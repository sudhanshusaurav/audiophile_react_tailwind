import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/shared/desktop/logo.svg'
import CartIcon from '../assets/shared/desktop/icon-cart.svg'
import Menu from './Menu'
import Cart from '../components/Cart'
import Categories from './Categories'
import { Link } from 'react-router-dom'

function Header({cart, clearCart, cartValue, updateCart}) {

    const [navOpen, setnavOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    // const refOuter = useRef()
    // const refInner = useRef()
    // const refNav = useRef()

    useEffect(() => {
        // if (window.innerWidth < 991.98) {
        //     refOuter.current.addEventListener('click',e => {
        //         if (refInner.current.contains(e.target)) {
        //             return;
        //         }
        //         setnavOpen(!navOpen)
        //     })
        // }
        let header = document.getElementById('header')
        let sticky = header.offsetTop;
        window.onscroll = () => {
            if(window.pageYOffset >= (sticky + 10)){
                console.log('scroll');
                header.classList.add("sticky-top")
            }else{
                header.classList.remove('sticky-top')
            }
        }

    }, [])

    useEffect(() => {
        if (navOpen || cartOpen) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }else{
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        }
    }, [navOpen, cartOpen])

    const openNavbar = () => {
        setnavOpen(!navOpen)
    }

    const openCart = () => {
        setCartOpen(!cartOpen)
    }

    return (
        <div id='header' className="fixed top-0 left-0 z-50 w-full">
            <div className="container flex items-center justify-between w-11/12 border-b lg:w-full border-gray-50 border-opacity-30">
                <div className="flex items-center">
                    <div className="lg:hidden" onClick={openNavbar}>
                        <div className="w-8 h-1 my-1 rounded-lg bg-gray-50"></div>
                        <div className="w-6 h-1 my-1 rounded-lg bg-gray-50"></div>
                        <div className="h-1 my-1 rounded-lg w-7 bg-gray-50"></div>
                    </div>
                    <Link to="/"><img src={Logo} alt="logo" className="my-6 ml-12 lg:ml-0"/></Link>
                </div>
                <div className="hidden lg:block">
                    <Menu/>
                </div>
                <div className={`block lg:hidden fixed w-full left-0 top-18 z-50 ${navOpen ? "nav-open" : "nav"}`}>
                    <div className="h-full px-4 pt-8 pb-16 bg-white md:h-auto md:px-8 md:py-16 rounded-br-lg rounded-bl-lg overflow-y-scroll">
                    <Categories closeNav={openNavbar}/>
                    </div>
                </div>
                <div className='relative'>
                    <button onClick={openCart}><img src={CartIcon} alt="cart" /></button>
                    {cart.length!==0 ? <span className='bg-primary text-white inline-block w-4 h-4 text-center text-xs rounded-full absolute -right-3 -top-3'>{cart.length}</span> : ''}
                </div>
            </div>
            <div className={`w-full bg-white absolute top-16 left-0 ${cartOpen ? 'cart-open' : 'cart'}`}>
                <div className="container w-11/12 lg:w-full h-screen">
                    <Cart cart={cart} clearCart={clearCart} cartValue={cartValue} updateCart={updateCart}/>
                </div>
            </div>
        </div>
    )
}

export default Header
