import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#211F1D] text-[#9A9793] font-sans relative pt-20 pb-8 px-6">
      
      {/* Əsas grid bölməsi */}
      <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12">
        
        {/* 1-ci Sütun (Loqo və mətn) */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="mb-6">
            {/* Şəkildəki narıncı əl loqosu (Təxmini SVG, originalı ilə dəyişə bilərsiniz) */}
            <svg 
              width="44" 
              height="44" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#F96400]"
            >
              <path d="M30 35 C20 50 15 70 35 85 C55 100 80 85 85 60 C90 35 70 15 50 20" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
              <path d="M25 45 C40 45 45 60 35 70" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
              <path d="M30 25 L35 5" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
              <path d="M48 20 L55 2" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
              <path d="M68 22 L80 10" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
              <path d="M82 35 L95 30" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[13px] leading-6 max-w-70">
            Connected in Comfort. Matching premium
            <br />
            streetwear for you and your companions.
          </p>
        </div>

        {/* 2-ci Sütun (SHOP) */}
        <div className="md:col-span-3 lg:col-span-3">
          <h3 className="text-white text-base font-bold tracking-wide mb-6">SHOP</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">Premium Tees</a></li>
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">Comfort Hoodies</a></li>
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">Pet Accessories</a></li>
          </ul>
        </div>

        {/* 3-cü Sütun (SUPPORT) */}
        <div className="md:col-span-2 lg:col-span-3">
          <h3 className="text-white text-base font-bold tracking-wide mb-6">SUPPORT</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">FAQ</a></li>
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">Shipping & Delivery</a></li>
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">Returns & Exchanges</a></li>
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* 4-cü Sütun (COMPANY) */}
        <div className="md:col-span-2 lg:col-span-2">
          <h3 className="text-white text-base font-bold tracking-wide mb-6">COMPANY</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">Our Story</a></li>
            <li><a href="#" className="text-[13px] hover:text-white transition-colors duration-200">Blog</a></li>
          </ul>
        </div>

      </div>

      {/* Alt hissə (Copyright və linklər) */}
      <div className="max-w-300 mx-auto mt-16 pt-6 border-t border-[#353331] flex flex-col md:flex-row justify-between items-center text-[12px]">
        <p className="mb-4 md:mb-0 text-[#6B6967]">
          © 2026 Hoella. All rights reserved.
        </p>
        <div className="flex space-x-6 text-[#9A9793]">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
        </div>
      </div>

      {/* Sağ alt küncdəki Chat düyməsi */}
      <button 
        aria-label="Chat"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#F96400] rounded-full flex items-center justify-center shadow-lg hover:bg-[#E05600] transition-colors z-50"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4 4H20C21.1 4 22 4.9 22 6V16C22 17.1 21.1 18 20 18H8L4 22V4Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </button>

    </footer>
  );
};

export default Footer;