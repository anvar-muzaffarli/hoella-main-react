
import './App.css'

import Header from './components/Header'

import Footer from './components/Footer'




// React Router DOM marshrut (rota) qurulmasi

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// sehifeler bura yerleshdirilecek
import Home from './pages/Home'
import DesignYourOwn from './pages/DesignYourOwn'
import NotFound from './pages/NotFound'
import Gifts from './pages/Gifts'


function App() {

  return (
    
    <div className='container mx-auto'>
      <BrowserRouter>
        <Header />
          <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/dizayn' element={<DesignYourOwn />} />
           <Route path="/hediyyeler" element={<Gifts />} />
           <Route path="*" element={<NotFound />} />
          </Routes>

        <Footer />
      </BrowserRouter>

    </div>


  )
}

export default App
