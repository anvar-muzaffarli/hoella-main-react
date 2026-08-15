import React from 'react'

const WearYourConnection:React.FC = () => {
    // OOP className
  return (
    <section className="bg-[#f4f5f6] py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
  <div className="max-w-5xl mx-auto">
    {/* <!-- Başlıq --> */}
    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
      Wear Your Connection
    </h2>

    {/* <!-- Grid Konteyneri --> */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* <!-- Sol Tərəf: Uzun Şəkil (Məsələn: Pişik və Qab) --> */}
      <div className="md:col-span-1 h-150.25">
        <img 
          src="/images/wearyourconnection/image1.svg" 
          alt="Uzun şəkil əvəzedicisi" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* <!-- Sağ Tərəf: Geniş və Kvadrat Şəkillər qrupu --> */}
      <div className="md:col-span-2 flex flex-col gap-4">
        
        {/* <!-- Üst Sağ: Geniş Şəkil (Məsələn: Kapüşonlu insanlar) --> */}
        <div className="flex-1 h-62.5 md:h-75">
          <img 
            src="/images/wearyourconnection/image2.svg" 
            alt="Geniş şəkil əvəzedicisi" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* <!-- Alt Sağ: İki Kvadrat Şəkil (Məsələn: İt pəncəsi və Yastıq) --> */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="h-50 md:h-62.5">
            <img 
              src="/images/wearyourconnection/image3.svg" 
              alt="Kvadrat şəkil əvəzedicisi 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-50 md:h-62.5">
            <img 
              src="/images/wearyourconnection/image4.svg" 
              alt="Kvadrat şəkil əvəzedicisi 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</section>
  )
}

export default WearYourConnection