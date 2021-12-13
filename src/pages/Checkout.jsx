import React from 'react'
import { Link } from 'react-router-dom'

function Checkout({cart, cartValue}) {

    const renderCart = cart.map(cartItem => {
        return(<>
        <div>
            <div className="flex items-start justify-between my-4">
                <div className="flex items-center">
                    <img src={cartItem.item.image.mobile} alt="product" className='h-16 rounded-lg mr-2'/>
                    <div>
                    <h6>{cartItem.item.name}</h6>
                    <p className='text-gray-400'>&#0036; {cartItem.item.price}</p>
                    </div>
                </div>
                <div className='w-20 text-right'>
                    <p className='text-gray-400'>{`x ${cartItem.qty}`}</p>
                </div>
            </div>
        </div>
        </>)
    })

    return (
        <div>
            <div className="py-9 bg-secondary"></div>
            <div className="container w-11/12 lg:w-full">
                <button onClick={() => window.history.back()} className="hover:text-primary my-4">Go Back</button>
                <div className='lg:flex items-start gap-8'>
                <div className='p-4'>
                    <h2>CHECKOUT</h2>
                    <h6 className='my-4 text-primary'>BILLING DETAILS</h6>

                    <form action="">
                        <div className='md:flex md:flex-wrap items-center'>
                        <div className='basis50 md:px-2 md:my-4'>
                            <label htmlFor="name" className='block'>Name</label>
                            <input type="text" name="name" id="" placeholder="Name" className='border rounded-lg border-gray-300 h-12 w-full p-4 placeholder:text-gray-500 focus:outline-none focus:border-primary'/>
                        </div>
                        <div className='my-6 md:my-0 basis50 md:px-2 md:my-4'>
                            <label htmlFor="email" className='block'>Email</label>
                            <input type="text" name="email" id="" placeholder="abc@gmail.com" className='border rounded-lg border-gray-300 h-12 w-full p-4 placeholder:text-gray-500 focus:outline-none focus:border-primary'/>
                        </div>
                        <div className='my-6 md:my-0 basis50 md:px-2 md:my-4'>
                            <label htmlFor="phone" className='block'>Phone Number</label>
                            <input type="text" name="phone" id="" placeholder="+1 202 343 2343" className='border rounded-lg border-gray-300 h-12 w-full p-4 placeholder:text-gray-500 focus:outline-none focus:border-primary'/>
                        </div>
                        </div>

                        <h6 className='my-4 text-primary'>SHIPPING INFO</h6>

                        <div className='md:flex flex-wrap items-center'>
                        <div className='basis100 md:px-2 md:mb-4'>
                            <label htmlFor="address" className='block'>Address</label>
                            <input type="text" name="address" id="" placeholder="Address" className='border rounded-lg border-gray-300 h-12 w-full p-4 placeholder:text-gray-500 focus:outline-none focus:border-primary'/>
                        </div>
                        <div className='my-6 md:my-0 basis50 md:px-2 md:my-4'>
                            <label htmlFor="zip" className='block'>Zip Code</label>
                            <input type="number" name="zip" id="" placeholder="100010" className='border rounded-lg border-gray-300 h-12 w-full p-4 placeholder:text-gray-500 focus:outline-none focus:border-primary'/>
                        </div>
                        <div className='my-6 md:my-0 basis50 md:px-2 md:my-4'>
                            <label htmlFor="city" className='block'>City</label>
                            <input type="text" name="city" id="" placeholder="New York" className='border rounded-lg border-gray-300 h-12 w-full p-4 placeholder:text-gray-500 focus:outline-none focus:border-primary'/>
                        </div>
                        <div className='my-6 md:my-0 basis50 md:px-2 md:my-4'>
                            <label htmlFor="country" className='block'>Country</label>
                            <input type="text" name="country" id="" placeholder="United State" className='border rounded-lg border-gray-300 h-12 w-full p-4 placeholder:text-gray-500 focus:outline-none focus:border-primary'/>
                        </div>
                        </div>
                        <h6 className='my-4 text-primary'>Payment Detail</h6>
                        <div className='my-6 md:flex'>
                            <label htmlFor="payment" className='block flex-1'>Payment Method</label>
                            <div className='flex-1'>
                            <div className='flex items-center p-4 border rounded-lg border-gray-300 hover:border-primary'>
                            <input disabled type="radio" name="payment" id="emoney" className='selection:bg-primary'/><label htmlFor="emoney" className='ml-4'>e-Money</label>
                            </div>
                            <div className='flex items-center p-4 my-4 border rounded-lg border-gray-300 hover:border-primary'>
                            <input defaultChecked type="radio" name="payment" id="cash" className='selection:bg-primary'/><label htmlFor="cash" className='ml-4'>Cash on Delivery</label>
                            </div>
                            </div>
                        </div>

                    </form>
                </div>
                <div className='p-4'>
                    <h3 className=''>SUMMARY</h3>
                    <div>
                        {renderCart}
                    </div>
                    <div className="flex items-center justify-between">
                        <h6 className='text-gray-400'>TOTAL</h6>
                        <h6> &#0036; {cartValue}</h6>
                    </div>
                    <div className="flex items-center justify-between my-4">
                    <h6 className='text-gray-400'>SHIPPING</h6>
                        <h6> &#0036; 50</h6>
                    </div>
                    <div className="flex items-center justify-between my-6">
                    <h6 className='text-gray-400'>GRAND TOTAL</h6>
                        <h6 className='text-primary'> &#0036; {cartValue + 50}</h6>
                    </div>
                    {cart.length !==0 ? <button className='block w-full py-5 px-10 bg-primary text-white tracking-wider hover:bg-primaryLight'>PLACE ORDER</button> : 
                    <Link to="/" className='block w-full py-4 bg-primary text-white'>Continue Shopping</Link>}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
