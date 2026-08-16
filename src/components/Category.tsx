import React from 'react'


interface CategoryProps {
    kateqoriyaninShekli:string;
    kateqoriyaninAdi:string;
}


// Object desctructuring - Obyektin parcalanmasi

const Category: React.FC<CategoryProps> = ({kateqoriyaninShekli, kateqoriyaninAdi}) => {
    return (

        <div className="category flex flex-col items-center justify-center gap-2.5">
            <img src={kateqoriyaninShekli} alt="" />
            <h6>{kateqoriyaninAdi}</h6>
        </div>
    )
}

export default Category