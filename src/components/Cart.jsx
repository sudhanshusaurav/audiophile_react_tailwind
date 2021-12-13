import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
function Cart({cart, clearCart, cartValue, updateCart}) {

    const renderCart = cart.map(cartItem => {
        console.log(cartItem);
        return(<>
                <div key={cartItem.item.name} className='flex items-center justify-between my-4'>
                    <div className='flex items-center w-1/2'>
                        <Link to=""><img src={cartItem.item.image.mobile} alt="product" className='w-16 rounded-lg'/></Link>
                        <div className='ml-4'>
                            <Link to="">{cartItem.item.name}</Link>
                            <span className='block'>&#0036; {cartItem.item.price}</span>
                        </div>
                    </div>
                    <div>
                    <div className='bg-greyLight flex items-center py-2 px-4'><span className='hover:text-primary' onClick={() => updateCart(cartItem.item,'minus')}><AiOutlineMinus/></span><span className='mx-4'>{cartItem.qty}</span><span className='hover:text-primary' onClick={() => updateCart(cartItem.item, 'plus')}><AiOutlinePlus/></span></div>
                    </div>
                    <div>
                        <button className='ml-2' onClick={() => updateCart(cartItem.item, 'remove')}><AiOutlineClose/></button>
                    </div>
                </div>
        </>)
    })

    return (
                <div className='py-4'>
                <div className='flex items-center justify-between'>
                    <h5>CART ({cart.length})</h5>
                    <button onClick={clearCart} className='hover:text-primary'>Remove All</button>
                </div>
                <div className='my-6'>
                {renderCart}
                </div>
                <div className="flex items-center justify-between">
                    <p>TOTAL</p>
                    <p className='bold'>&#0036; {cartValue}</p>
                </div>
                <div className='text-center my-4'>
                   {cart.length !==0 ? <Link to="/checkout" className='block w-full py-4 bg-primary text-white hover:bg-primaryLight'>CHECKOUT</Link> :
                    <Link to="/" className='block w-full py-4 bg-primary text-white'>Continue Shopping</Link>}
                </div>
                </div>
    )
}

export default Cart