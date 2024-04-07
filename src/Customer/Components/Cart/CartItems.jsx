import React from 'react'

function CartItems() {
  return (
    <div className='p-4 shadow-lg border rounded-md'>
      <div className="flex items-center">
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" className='h-full w-full object-cover object' alt="" />
        </div>

        <div className='flex-1 ml-4'>
          <h1 className='text-lg font-semibold'>Product Name</h1>
          <p className='text-sm text-gray-500'>Product description</p>
          <div className='flex items-center mt-2'>
            <div className='flex items-center'>
              <button className='border p-1 rounded-full'>-</button>
              <span className='mx-2'>1</span>
              <button className='border p-1 rounded-full'>+</button>
            </div>
            <span className='ml-auto'>$1000</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItems