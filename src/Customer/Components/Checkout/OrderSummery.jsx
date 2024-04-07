import React from 'react'
import { Grid, Button, Box, TextField } from '@mui/material'
import CartItems from '../Cart/CartItems'
function OrderSummery() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          {/* Existing delivery address list will goes here */}
          <Box className='border rounded shadow-md p-5'>
            <h1>Selected address</h1>

          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          {/* Selected products list will goes here */}
          <Box className='border rounded shadow-md p-5'>

            {[1, 1, 1, 1].map((item, index) => (
              <CartItems key={index} />
            ))}



          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box className='border rounded shadow-md p-5'>
            <h1>Order summery</h1>
            <div className='flex justify-between'>
              <h1>Subtotal</h1>
              <h1>1000</h1>
            </div>
            <div className='flex justify-between'>
              <h1>Shipping</h1>
              <h1>100</h1>
            </div>
            <div className='flex justify-between'>
              <h1>Total</h1>
              <h1>1100</h1>
            </div>
            <Button variant='contained' fullWidth color='primary'>Proceed to payment</Button>
          </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default OrderSummery