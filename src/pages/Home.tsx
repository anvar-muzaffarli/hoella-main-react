import React from 'react'
import CategoriesSection from '../components/CategoriesSection'
import HeroSection from '../components/HeroSection'
import ShopProducts from '../components/ShopProducts'
import WearYourConnection from '../components/WearYourConnection'

const Home: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <CategoriesSection />
            <ShopProducts />
            <WearYourConnection />
        </div>
    )
}

export default Home