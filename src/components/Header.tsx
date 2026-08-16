import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
// TODO 1. object destructuring - Obyektlerin parcalanmasi 
// Eger senin fonksiyonun geriye htmle benzeyen kod qaytarirsa bu funksiya component adlanir.
// function expression
const Header: React.FC = () => {

    // arrow function expression
    // 2018-ci ilden kodlarda istifade olunan hazir yapilar use ile bashlayan ifadeler hooklar adlanir.
    // generics <>
    const mobileMenuDivi = useRef<HTMLDivElement>(null)

    const navbariAc = () => {
        if(mobileMenuDivi && mobileMenuDivi.current) {
            mobileMenuDivi.current.classList.add("w-full")
        }
    }

    const navbariBagla = () => {
        if(mobileMenuDivi && mobileMenuDivi.current) {
            mobileMenuDivi.current.classList.remove("w-full")
        }
    }


    return (

        <>
            <div
                ref={mobileMenuDivi}
                className="transition-all duration-1000 ease-in-out mobile-menu-section bg-[#23201E] opacity-[0.9] h-screen fixed z-999999 w-0  overflow-x-hidden top-0 left-0 lg:hidden">
                <div className="flex justify-between p-5">
                    <img src="/images/mobile/close-icon.svg" alt="" onClick={navbariBagla} className="cursor-pointer" />
                    <img src="/images/mobile/basket.svg" alt="" />
                </div>

                <nav className="mobile-links text-white p-5 flex flex-col text-[22px] gap-6 py-25">
                    <a href="">Design your own</a>
                    <a href="">Gifts</a>
                    <a href="">Humans</a>
                    <a href="">Home & Living</a>

                </nav>

            </div>



            <header className="header px-2.5 md:px-10 py-10 flex justify-between items-center">
                <Link to="/"><img src="/images/header/logo.svg" alt="" className="logo hidden lg:flex" /> </Link>

                <div className="mobile-section flex items-center gap-3.5 md:gap-6 lg:hidden ">
                    <img src="/images/header/bars.svg" alt="" onClick={navbariAc}   className="cursor-pointer" />
                    <img src="/images/header/mobile-logo.svg" alt="" />
                </div>

                <nav className="nav-links hidden lg:flex lg:gap-10 lg:items-center">
                    <Link to="/dizayn">Design your own </Link>
                    <a href="">Shop</a>
                    <Link to="/hediyyeler">Gifts</Link>
                </nav>

                <div className="search-bar md:w-[90%] lg:w-[30%] flex justify-center items-center gap-7.5">
                    <img src="/images/header/search.svg" alt="" />
                    <input type="text" className="hidden md:flex md:w-[60%] lg:w-full" />
                </div>

                <div className="header-right-side flex gap-3.5 md:gap-6">
                    <img src="/images/header/user.svg" alt="" />
                    <img src="/images/header/basket.svg" alt="" />
                </div>

            </header>

        </>)
}

export default Header

