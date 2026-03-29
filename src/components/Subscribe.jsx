import React, { useState } from 'react'
import subscribeBg from '../assets/images/subscribe-bg.png'

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`)
      setEmail('')
    }
  }

  return (
    <section
      className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${subscribeBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-15"></div>

      <div className="relative z-10 text-center w-full max-w-[320px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mx-auto">

        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5">
          Subscribe our fitness tips
        </h2>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-10">
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-[480px] sm:max-w-[520px] mx-auto bg-[#661313] rounded-md overflow-hidden p-2 gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-transparent text-white placeholder-gray-300 text-sm px-4 py-2 border-none outline-none min-w-0"
          />
          <button
            onClick={handleSubscribe}
            className="bg-gray-300 hover:bg-gray-100 text-[#b42a20] text-xs sm:text-sm font-semibold px-4 sm:px-7 py-3 border-none cursor-pointer transition-colors duration-300 whitespace-nowrap rounded-md flex-shrink-0"
          >
            Subscribe Now →
          </button>
        </div>

      </div>
    </section>
  )
}

export default Subscribe
