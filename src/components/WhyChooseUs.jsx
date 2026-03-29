import React from 'react'
import img1 from '../assets/images/whychoose1.png'
import img2 from '../assets/images/whychoose2.png'
import badge from '../assets/images/gym-badge.png'
import workoutIcon from '../assets/images/workout-icon.png'
import nutritionIcon from '../assets/images/nutrition-icon.png'
import selfdefenceIcon from '../assets/images/selfdefence-icon.png'
import progressionIcon from '../assets/images/progression-icon.png'
import stopwatchIcon from '../assets/images/stopwatch.png'

const features = [
  {
    icon: workoutIcon,
    title: 'WORKOUT',
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  },
  {
    icon: nutritionIcon,
    title: 'NUTRITION',
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  },
  {
    icon: selfdefenceIcon,
    title: 'SELF DEFENCE',
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  },
  {
    icon: progressionIcon,
    title: 'PROGRESSION',
    desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0d0d0d] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

        <div className="w-full lg:flex-1">

          <div className="flex items-center gap-2 mb-4">
            <img src={stopwatchIcon} alt="icon" className="w-6 h-6 object-contain" />
            <span className="text-[#edece9] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Best Features
            </span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Why Choose Us
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-8 sm:mb-10 max-w-full lg:max-w-[520px]">
            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
            and 1.10.33 of "de Finibus Bonorum et Malorum" by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div key={feature.title}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1 flex-shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  </div>
                  <h3 className="text-white font-bold text-sm tracking-wider">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:flex-1 relative flex justify-center items-center min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
          <img src={img1} alt="Gym 1" className="w-[50%] sm:w-[55%] rounded-lg object-cover absolute top-0 left-0 z-10" />
          <img src={img2} alt="Gym 2" className="w-[50%] sm:w-[55%] rounded-lg object-cover absolute bottom-0 right-0 z-20" />
          <img src={badge} alt="Power Gym Badge" className="w-[90px] sm:w-[110px] lg:w-[130px] absolute bottom-0 left-[15%] z-30" />
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
