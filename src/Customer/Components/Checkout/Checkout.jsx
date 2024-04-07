import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddress from './DeliveryAddress';
import OrderSummery from './OrderSummery';
export default function Checkout() {
    const steps = [ 'Delivary address','Order summery', 'Payment'];

    const location = useLocation()
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const searchQuery = new URLSearchParams(location.search)
    let step = searchQuery.get('step')
    step = step ? Number(step) : 0;
    console.log({ step })


    const handleNext = () => {
        if (step === steps.length - 1) {
            console.log('submit logic')
        } else {

            searchQuery.set('step', step + 1)
            navigate(`?${searchQuery.toString()}`);
        }
    };

    const handleBack = () => {
        searchQuery.set('step', step - 1)
        navigate(`?${searchQuery.toString()}`);
    };


    return (

        <div className='px-10 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {step === 1 && <OrderSummery />}
                        {step === 0 && <DeliveryAddress />}
                        {/* {step === 2 && <Employment />} */}
                       
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={step === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />


                            
                        </Box>
                    </React.Fragment>
                )}
            </Box>

        </div>
    );
}