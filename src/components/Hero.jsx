import React, { useState } from 'react'
import heroBg from '../assets/images/hero-bg.png'

const Hero = () => {
  const [activeDot, setActiveDot] = useState(1)

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[750px] mx-auto">

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
          Never Give Up The <br />
          <span className="text-[#e6a817]">Best Fitness</span>{' '}
          <span className="text-white">For You</span>
        </h1>

        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-10 max-w-[280px] sm:max-w-[400px] md:max-w-[550px] mx-auto">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one.
        </p>

        <button className="bg-[#9c1c16] hover:bg-[#c9332a] text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-colors duration-300 border-none cursor-pointer">
          Became Member →
        </button>

        <div className="flex items-center justify-center gap-3 mt-10 sm:mt-16">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`rounded-full border-none cursor-pointer transition-all duration-300 ${
                activeDot === dot
                  ? 'w-4 h-4 bg-white'
                  : 'w-3 h-3 bg-gray-400 opacity-60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
