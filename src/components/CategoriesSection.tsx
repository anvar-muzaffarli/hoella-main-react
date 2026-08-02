import React from 'react'
import Category from './Category'


import kateqoriyalar from "../../public/data.json"



const CategoriesSection: React.FC = () => {


    return (
        <section className="categories-section py-20">
            <h1 className="text-center pt-20 md:text-[48px] pb-17.5 roboto-bold">The Ultimate Connection Starts Here
            </h1>

            <div className="categories flex justify-center gap-15">

            {
                kateqoriyalar && kateqoriyalar.map((birKateqoriya)=>(
                    <Category kateqoriyaninShekli={birKateqoriya.mehsulun_shekli} kateqoriyaninAdi={birKateqoriya.mehsulun_adi} />
                ) )
            }
         
           
        

            </div>
        </section>
    )
}

export default CategoriesSection