 import React from "react";


 interface ProductCardProps {
  key:number;
  basliq:string;
  qiymeti:number;
  shekil:string;

 }


 
 const ProductCard:React.FC<ProductCardProps> = ({basliq, qiymeti, shekil}) => {
    return (
      <div className="product-card flex flex-col justify-center">
        <img src={shekil} alt="" className="product-img rounded-[50%]" />
        <h5>{basliq}</h5>
        <div className="price-section flex justify-between">
          <small className="text-2xl font-bold py-4.5">{qiymeti} &#8378;</small>
          <img src="./public/images/shop-latest/plus.svg" alt="" className="w-5" />
        </div>
      </div>
    );
  };


  export default ProductCard