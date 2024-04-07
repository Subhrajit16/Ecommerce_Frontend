import React from 'react'
import HeroCarousel from '../../Components/HeroCarousel/HeroCarousel'
import HomeCardCarousel from '../../Components/HomecarouselCard/HomeCardCarousel'
import {mens_kurta} from './men_kurta'
function HomePage() {
  return (
    <div>
      
      <HeroCarousel />
      <div className='space-y-10 py-14'>
        <HomeCardCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeCardCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeCardCarousel data={mens_kurta} sectionName={"Men's Jeans"}/>
        

      </div>
    </div>
  )
}

export default HomePage