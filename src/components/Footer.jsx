import React, { useState } from 'react'
import logo from '../assets/images/GYM Logo 2.png'
import facebookIcon from '../assets/images/fb-yellow.png'
import instagramIcon from '../assets/images/insta-yellow.png'
import githubIcon from '../assets/images/github-yellow.png'
import twitterIcon from '../assets/images/twitter-yellow.png'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`)
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#111111] pt-10 sm:pt-12 lg:pt-16 pb-6 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col lg:flex-row mb-8 sm:mb-12 gap-8 lg:gap-4">

          <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-[35%] lg:pr-16">
            <img src={logo} alt="Muziers" className="h-[80px] sm:h-[100px] lg:h-[120px] object-contain object-left -mt-2 lg:-mt-3" />
            <p className="text-gray-400 text-sm leading-relaxed">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { src: facebookIcon, alt: 'Facebook' },
                { src: instagramIcon, alt: 'Instagram' },
                { src: githubIcon, alt: 'Github' },
                { src: twitterIcon, alt: 'Twitter' },
              ].map((icon) => (
                <a key={icon.alt} href="#" className="hover:opacity-75 transition-opacity">
                  <img src={icon.src} alt={icon.alt} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 lg:flex-1">

            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">Company</h4>
              {['About', 'Features', 'Works', 'Career'].map((item) => (
                <a key={item} href="#" className="text-gray-400 text-sm hover:text-white transition-colors no-underline">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">Sports</h4>
              {['Cricket', 'Football', 'Hockey', 'Baseball'].map((item) => (
                <a key={item} href="#" className="text-gray-400 text-sm hover:text-white transition-colors no-underline">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">Let's get in touch</h4>
              <div className="flex items-center gap-2 bg-transparent border border-[#444] rounded-lg px-3 sm:px-4 py-2 sm:py-3 h-[46px] sm:h-[50px]">
                <span className="text-gray-400 text-base flex-shrink-0">✉</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent text-white placeholder-gray-400 text-xs sm:text-sm border-none outline-none min-w-0"
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="w-full h-[46px] sm:h-[50px] bg-[#9c1c16] hover:bg-[#c9332a] text-white font-semibold text-sm rounded-lg border-none cursor-pointer transition-colors duration-300"
              >
                Subscribe Now
              </button>
            </div>

          </div>
        </div>

        <hr className="border-[#333] mb-4 sm:mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center sm:justify-start">
            {['About us', 'Contact', 'Privacy policy', 'Terms of Use'].map((item) => (
              <a key={item} href="#" className="text-white text-xs sm:text-sm hover:text-gray-400 transition-colors no-underline">
                {item}
              </a>
            ))}
          </div>
          <p className="text-white text-xs sm:text-sm">© 2023, All Rights Reserved</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
