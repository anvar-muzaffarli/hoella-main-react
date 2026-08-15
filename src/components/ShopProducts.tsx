import React, {useEffect, useState} from 'react'
import ProductCard from './Product'


import axios from 'axios';

interface Category {
  id:number;
  name:string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;

}


// string,boolean, undefined, object, [],

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

// []





const ShopProducts:React.FC = () => {

  // initialState = []
const [urunler, setUrunler] = useState<Product[]>([])
const [loading, setLoading] = useState<boolean>(true)


// [] - React bir defe render ele
// dependencyList 

// get, post, put, delete -> RESTFUL API (Backendde)
useEffect(()=> {
  const mehsullariGetir = async() => {
      try {
        // Generics
        const mehsullar = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      setUrunler(mehsullar.data)

      }
      catch(hata) {
        console.log(`Melumat yuklenerken xeta bash verdi. Xetanin sebebi : ${hata}`)
      }
      finally {
        setLoading(false)
      }
  }

  mehsullariGetir()
}, [])



if (loading) {
  return <span className='text-center py-20 text-7xl'>Melumatlariniz yuklenir...</span>;
}


  return (
    
    <section className="shop-our-latest md:py-25">
    <h1 className="text-center text-bold text-[28px] md:text-[48px] league-spartan-bold">Shop Our Latest Drops</h1>

    <div className="product-cards grid grid-cols-1 md:grid-cols-3">
            

            {
              urunler && urunler.map(birUrun=> (
                // props = "melumatlar"
                <ProductCard key={birUrun.id} basliq={birUrun.title} qiymeti={birUrun.price} shekil= {birUrun.images[0]}   />
              ))
            }

            
         
           
         



    </div>


    <button id="modal-btn" className="view-all-drops absolute left-1/2  -translate-x-1/2   border border-[#ff6200] py-2.5 px-10 rounded-2xl">View all drops</button>


</section>
  )
}

export default ShopProducts