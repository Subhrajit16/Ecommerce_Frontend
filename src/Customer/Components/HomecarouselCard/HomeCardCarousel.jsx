import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '@mui/material/Button';

const CustomRightArrow = ({ onClick, ...rest }) => {
    return (
        <Button variant="contained" color="primary" onClick={() => onClick()} {...rest}>
            Next
        </Button>
    );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
    return (
        <Button variant="contained" color="primary" onClick={() => onClick()} {...rest}>
            Previous
        </Button>
    );
};
function HomeCardCarousel({ data,sectionName }) {
    const carouselData = data.slice(0, 10)

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='border  border-gray-400 p-5'>
            <h2 className='text-2xl font-extrabold text-gray-80 pb-5'>{sectionName}</h2>
            <Carousel 

                draggable={true}
                // autoPlay={true}
                autoPlaySpeed={2000}
                responsive={responsive}>
                {carouselData.map((item, index) => (
                    <div key={index} className='  cursor-pointer mx-3 border border-black flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden'>
                        <div className='h-[13rem] w-[10rem]'>
                            <img className='object-cover object-top w-full h-full' src={item.imageUrl} alt="" />
                        </div>

                        <div className='p-4'>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <p className='text-sm text-gray-500'>{item.brand}</p>
                            <p className='text-lg font-semibold text-gray-500'>Rs.{item.price}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default HomeCardCarousel