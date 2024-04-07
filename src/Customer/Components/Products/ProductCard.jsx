import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
function ProductCard({product}) {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/products/2')} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
        </div>

        <div className="text-part bg-white p-3">
            <div>
                <p>Universal outfit</p>
                <p>Title will goes here</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='line-through opacity-65'>2999/-</p>
                <p>199/-</p>
                <p className='text-green-600'>70% off</p>
            </div>

        </div>
        
    </div>
  )
}

export default ProductCard