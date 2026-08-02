
import './App.css'
import CategoriesSection from './components/CategoriesSection'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ShopProducts from './components/ShopProducts'


function App() {

  return (
    
    <div className='container mx-auto'>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <ShopProducts />
    </div>


  )
}

export default App
