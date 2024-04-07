import React from 'react'
import { Grid, Button, Box, TextField } from '@mui/material'
function DeliveryAddress() {
    return (
        <div className=' py-10 lg:py-20'>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    {/* Existing delivery address list will goes here */}
                    <Box className='border rounded shadow-md p-5'>
                        <h1>Existing delivery address</h1>

                    </Box>


                </Grid>

                <Grid item xs={12} md={6}>

                    <Box className='border rounded shadow-md p-5'>

                        <form action="">
                            <Grid container spacing={3}>

                                <Grid item xs={12} sm={6}>
                                    <TextField label='First Name' fullWidth id='firstName' autoComplete='given' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label='Last Name' fullWidth id='lastName' autoComplete='given' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label='Address' fullWidth id='address' multiline rows={4} autoComplete='given' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label='State' fullWidth id='state' autoComplete='given' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label='City' fullWidth id='city' autoComplete='given' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label='Zip/Postal Code' fullWidth id='zip' autoComplete='given' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label='Mobile' fullWidth id='mobile' autoComplete='given' />
                                </Grid>
                                <Grid item xs={12} >
                                    <Button variant='contained' fullWidth color='primary'>Save</Button>
                                </Grid>


                            </Grid>
                        </form>

                    </Box>

                </Grid>

            </Grid>
        </div>
    )
}

export default DeliveryAddress