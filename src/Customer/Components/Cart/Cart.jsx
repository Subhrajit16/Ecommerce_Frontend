import React from 'react'
import CartItems from './CartItems'
import { useNavigate } from 'react-router-dom'
function Cart() {
    const navigate = useNavigate()
    function handleNavigate(){
        navigate('/checkout')
    }
    return (
        <div className='pt-10'>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className="col-span-2">
                    <CartItems />
                    <CartItems />
                    <CartItems />

                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='p-4 shadow-lg border rounded-md'>
                        <h1 className='text-xl font-semibold'>Order Summary</h1>
                        <div className='flex justify-between mt-4'>
                            <p>Subtotal</p>
                            <p>$200</p>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <p>Shipping</p>
                            <p>$10</p>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <p>Total</p>
                            <p>$210</p>
                        </div>
                        <button onClick={handleNavigate} className='w-full bg-black text-white py-2 mt-4'>Checkout</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart