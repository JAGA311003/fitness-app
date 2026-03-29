import React, { useState, useEffect } from 'react'
import logo from '../assets/navImages/GYMLogo1.png'
import searchIcon from '../assets/navImages/searchIcon.png'
import userIcon from '../assets/navImages/ContactIcon.png'
import cartIcon from '../assets/navImages/CartIcon.png'
import gridIcon from '../assets/navImages/MultiAppIcon.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#111111] shadow-[0_2px_20px_rgba(0,0,0,0.6)]' : 'bg-[#1a1a1a]'
    }`}>

      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-[70px] md:h-[80px] flex items-center justify-between">

        <div className="flex-shrink-0">
          <img src={logo} alt="Muziers" className="h-[40px] sm:h-[45px] md:h-[55px] object-contain" />
        </div>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 list-none m-0 p-0">
          <li>
            <a href="#home" className="text-gray-300 text-[14px] hover:text-[#e63c2f] transition-colors duration-200 no-underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 text-[14px] hover:text-[#e63c2f] transition-colors duration-200 no-underline">
              About
            </a>
          </li>
          <li className="relative group">
            <a href="#pages" className="text-gray-300 text-[14px] hover:text-[#e63c2f] transition-colors duration-200 no-underline flex items-center gap-1">
              Pages <span className="text-[12px] relative top-[1px]">▾</span>
            </a>
            <ul className="absolute top-full left-0 bg-[#1a1a1a] border border-[#333] rounded-md min-w-[140px] py-2 list-none m-0
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mt-2">
              <li>
                <a href="#page1" className="block px-4 py-2 text-gray-300 text-sm hover:bg-[#e63c2f] transition-colors no-underline">
                  Page 1
                </a>
              </li>
              <li>
                <a href="#page2" className="block px-4 py-2 text-gray-300 text-sm hover:bg-[#e63c2f] transition-colors no-underline">
                  Page 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#blog" className="text-gray-300 text-[14px] hover:text-[#e63c2f] transition-colors duration-200 no-underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#shop" className="text-gray-300 text-[14px] hover:text-[#e63c2f] transition-colors duration-200 no-underline">
              Shop
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 text-[14px] hover:text-[#e63c2f] transition-colors duration-200 no-underline">
              Contact US
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="bg-transparent border-none cursor-pointer p-1 sm:p-1.5 flex items-center justify-center hover:opacity-70 transition-opacity">
            <img src={searchIcon} alt="Search" className="w-7 h-7 sm:w-6 sm:h-6 object-contain brightness-0 invert" />
          </button>
          <button className="bg-transparent border-none cursor-pointer p-1 sm:p-1.5 flex items-center justify-center hover:opacity-70 transition-opacity">
            <img src={userIcon} alt="User" className="w-7 h-7 sm:w-6 sm:h-6 object-contain brightness-0 invert" />
          </button>
          <button className="bg-transparent border-none cursor-pointer p-1 sm:p-1.5 flex items-center justify-center hover:opacity-70 transition-opacity">
            <img src={cartIcon} alt="Cart" className="w-7 h-7 sm:w-6 sm:h-6 object-contain brightness-0 invert" />
          </button>
          <button className="bg-transparent rounded-md p-1 flex items-center justify-center border-none cursor-pointer">
            <img src={gridIcon} alt="Grid" className="w-7 h-7 sm:w-6 sm:h-6 object-contain" />
          </button>

          <button
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none ml-1 sm:ml-2 p-1"
            onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`w-5 sm:w-6 h-0.5 bg-white rounded block transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-5 sm:w-6 h-0.5 bg-white rounded block transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 sm:w-6 h-0.5 bg-white rounded block transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-[#333]">
          <ul className="flex flex-col px-4 sm:px-6 py-4 list-none m-0 gap-0">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#pages', label: 'Pages' },
              { href: '#blog', label: 'Blog' },
              { href: '#shop', label: 'Shop' },
              { href: '#contact', label: 'Contact US' },
            ].map((item) => (
              <li key={item.label} className="border-b border-[#2a2a2a] last:border-none">
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3 text-white text-[15px] hover:text-[#e63c2f] transition-colors no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
