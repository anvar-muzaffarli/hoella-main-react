 import React from "react";
 
 const ProductCard:React.FC = () => {
    return (
      <div className="product-card flex flex-col justify-center">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" className="product-img" />
        <h5>Məhsul Başlığı</h5>
        <div className="price-section flex justify-between">
          <small>$ 99.99</small>
          <img src="./public/images/shop-latest/plus.svg" alt="" />
        </div>
      </div>
    );
  };


  export default ProductCard