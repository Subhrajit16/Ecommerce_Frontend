import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function HeroCarousel() {
    const carouselData = [
        {
            image: 'https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg',
            title: 'Title 1',
            description: 'Description 1'
        },
        {
            image: 'https://marketplace.canva.com/EAFEH3mIUaM/1/0/1600w/canva-dark-grey-and-white-minimalist-new-fashion-collection-banner-nvaqxg-8iXI.jpg',
            title: 'Title 2',
            description: 'Description 2'
        },
        {
            image: 'https://marketplace.canva.com/EAFKwYBIPEk/1/0/1600w/canva-beige-simple-new-fashion-collection-banner-5rZTaKKluH8.jpg',
            title: 'Title 3',
            description: 'Description 3'
        }
    ]
    return (
        <div style={{position:'relative', zIndex:'-99'}}>
            <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} useKeyboardArrows dynamicHeight={true} emulateTouch stopOnHover  >
                {carouselData.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        {/* <p className="legend">{item.title}</p> */}
                    </div>
                
                ))}
            </Carousel>
        </div>
    )
}

export default HeroCarousel