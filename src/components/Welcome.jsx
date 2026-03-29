import React from 'react'
import welcomeBg from '../assets/images/welcome-bg.png'
import equipmentIcon from '../assets/images/equipment-icon.png'
import fitnessIcon from '../assets/images/fitness-icon.png'
import stopwatchIcon from '../assets/images/stopwatch.png'

const features = [
  {
    icon: equipmentIcon,
    title: 'MODERN EQUIPMENT',
    desc: "Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use",
  },
  {
    icon: fitnessIcon,
    title: 'Body Fitness',
    desc: "Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use",
  },
]

const Welcome = () => {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] bg-[#0d0d0d] overflow-hidden">

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${welcomeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="absolute inset-0 bg-black opacity-10 lg:opacity-10"></div>

      <div className="relative z-10 flex items-center min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] lg:justify-end">
        <div className="w-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20">

          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <img src={stopwatchIcon} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
            <span className="text-[#e6a817] text-xs sm:text-sm font-semibold tracking-[3px] uppercase">
              ABOUT US
            </span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Welcome To Our Gym
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed mb-8 sm:mb-10">
            It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution
          </p>

          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-2">
                  <img src={feature.icon} alt={feature.title} className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0" />
                  <h3 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <button className="bg-[#a2231d] hover:bg-[#c9332a] text-white text-sm font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group border-none">
            <span>Discover More</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Welcome
