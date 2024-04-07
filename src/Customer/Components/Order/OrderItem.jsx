import React from 'react'
import { Grid } from '@mui/material'

function OrderItem() {
    return (
        <div className='p-10'>
            <Grid className='border rounded shadow-md p-5' container spacing={2} >
                <Grid md={4} item xs={12}>
                    <div className="flex cursor-pointer ">
                        <img src="" className='h-[5rem] w-[5rem] object-cover object-top' alt="" />
                        <div className=' ml-5 space-y-2'>
                            <p>Shirt</p>
                            <p className='opacity-55 font-semibold'>Size: M</p>
                            <p className='opacity-55 font-semibold'>Color:Black</p>

                        </div>
                    </div>
                </Grid>

                <Grid item md={4} >
                    <div className="">
                        <h1>Price</h1>
                        <h1>1000</h1>
                    </div>
                </Grid>

                <Grid item md={4} >
                    <div className="">
                        <h1>Status</h1>
                        <h1>Delivered</h1>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderItem