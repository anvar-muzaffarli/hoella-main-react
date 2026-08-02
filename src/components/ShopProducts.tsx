import React from 'react'
import ProductCard from './Product'


// axios

// axios.get() -> get() metodu ne ishe yarayir

// useState() nedir ve typescriptde nece yazilmalidir
// initialState setState bunlar ne menaye gelir -> useState

// Component LifeCycle - useEffect() -> dependencyList ([]) ne demekdir ve ne ishe yarayir


const ShopProducts:React.FC = () => {


  return (
    
    <section className="shop-our-latest md:py-25">
    <h1 className="text-center text-bold text-[28px] md:text-[48px] league-spartan-bold">Shop Our Latest Drops</h1>

    <div className="product-cards grid grid-cols-1 md:grid-cols-3">
             {/*bura bizim mehsullar gelecek  */}

             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />



    </div>


    <button id="modal-btn" className="view-all-drops absolute left-1/2  -translate-x-1/2   border border-[#ff6200] py-2.5 px-10 rounded-2xl">View all drops</button>


</section>
  )
}

export default ShopProducts