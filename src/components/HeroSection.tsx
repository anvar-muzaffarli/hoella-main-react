import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import { Autoplay } from 'swiper/modules';


const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <h1 className="league-spartan-bold text-center text-[48px] md:text-[64px] lg:text-[80px]"> WEAR YOUR <br />
                CONNECTION</h1>

            {/* <!-- unordered list --> */}

            <ul className="flex flex-wrap justify-center px-10 gap-10 mt-4 text-[#4b5563]">
                <li className="roboto-thin"> ✓ Matching Sets</li>
                <li className="roboto-thin">✓ Premium Quality</li>
                <li className="roboto-thin">✓ Easy to Customize</li>
            </ul>

            <div className="shop flex flex-col items-center md:flex-row justify-center gap-6 mt-12 mb-25">
                <button
                    className="bg-[#ff6200] text-white roboto-bold w-56.5 h-14.25 rounded-lg cursor-pointer">Shop
                    collection</button>
                <button
                    className="bg-white text-[#ff6200] roboto-bold w-56.5 h-14.25 border border-[#ff6200] rounded-lg cursor-pointer">Start
                    designing</button>
            </div>

            <Swiper className="carousel-section py-100"

                slidesPerView={1}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                modules={[Autoplay]}


                breakpoints={{
                   
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    }
                  }}
            >


                <SwiperSlide>
                    <div className="bg-[#00B3FF]   relative w-82 h-68">
                        <img src="./public/images/hero/it.png" alt="" className="absolute w-76 h-94.5 left-1/2 -translate-x-1/2 -top-21.75" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[#00B3FF]   relative w-82 h-68">
                        <img src="./public/images/hero/man.png" alt="" className="absolute left-1/2 -translate-x-1/2 w-76 h-94.5 -top-26.25" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[#00B3FF]   relative w-82 h-68">
                        <img src="./public/images/hero/cat-collar-tshirt.png" alt=""
                            className="absolute left-1/2 -translate-x-1/2 w-76 h-94.5 -top-21.75" />
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="bg-[#00B3FF]   relative w-82 h-68">
                        <img src="./public/images/hero/dad-tshirt.png" alt=""
                            className="absolute left-1/2 -translate-x-1/2 w-76 h-94.5 -top-26.25" />
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="bg-[#00B3FF]   relative w-82 h-68">
                        <img src="./public/images/hero/daughter-sweatshirt.png" alt=""
                            className="absolute left-1/2 -translate-x-1/2 w-76 h-94.5 -top-27.5" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[#00B3FF]   relative w-82 h-68">
                        <img src="./public/images/hero/dog-green-sweatshirt.png" alt=""
                            className="absolute left-1/2 -translate-x-1/2 w-76 h-94.5 -top-26.25" />
                    </div>
                </SwiperSlide>





            </Swiper>

            <ul className="flex flex-wrap justify-center gap-2.5 md:gap-14.25 text-[14px]">
                <li>🔒 100% Secure Checkout </li>
                <li className="flex gap-2.5"> <img src="./public/images/hero/flag.png" className="w-4.5" alt="" /> Proudly
                    Printed in Atlanta, GA</li>
                <li>⭐️ Satisfaction Guaranteed </li>
            </ul>




        </section>
    )
}

export default HeroSection